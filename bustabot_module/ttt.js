var ttt_board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var x_char = '❌';
var o_char = '⭕';
var n_char = '◻';

var turn = 1;

var emo_0 = "0⃣";
var emo_x = ["1⃣","2⃣","3⃣"];
var emo_y = ["🅰","🅱", "🅾"];

function ResetGame(){
	ttt_board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	turn = 1;
}

function PrintSpace(val){
	if(val==-1){
		return x_char;
	}
	if(val==1){
		return o_char;
	}
	return n_char;
}

function PrintBoard() {
	var board = "";
	board += emo_0 + emo_x[0] + emo_x[1] + emo_x[2]+"\n";
	for (var y = 0; y < 3; y++) {
		board += emo_y[y];
	for (var x = 0; x < 3; x++) {	
			board += PrintSpace(ttt_board[x][y]);
		}
		board += "\n";
	}
	return board;
}

// -1 ou 1, alguém ganhou. 0, ninguém ganhou ainda. 2, empate.
function EvalBoard(){
	// check horizontal
	for(var y = 0; y<3;y++){
		var sum = 0;
		for(var x = 0; x<3;x++){
			sum += ttt_board[x][y];
		}
		if(sum == 3) return 1;
		if(sum == -3) return -1;
	}
	// check vertical
	for(var x = 0; x<3;x++){
		var sum = 0;
		for(var y = 0; y<3;y++){
			sum += ttt_board[x][y];
		}
		if(sum == 3) return 1;
		if(sum == -3) return -1;
	}
	// check diagonal
	var sumd1 = 0;
	var sumd2 = 0;
	for(var x = 0; x<3; x++){
		sumd1 += ttt_board[x][x];
		sumd2 += ttt_board[x][2-x];
		if(sumd1 == 3 || sumd2 == 3) return 1;
		if(sumd1 == -3 || sumd2 == -3) return -1;
	}
	// check draw
	for(var x = 0; x<3; x++){
		for(var y = 0; y<3;y++){
			if(ttt_board[x][y]==0){
				return 0;
			}
		}
	}
	return 2;
}

function TTTCommand(user, text) {
	var input = text.split(" ");
	if (input.length != 3) {
		return user + ", o número de parâmetros está incorreto.\n" + PrintBoard();
	}
	var x_coord = parseInt(input[1]);
	var y_coord = 0;
	switch(input[2]) {
	case 'a':
	case 'A':
		y_coord = 1;
		break;
	case 'b':
	case 'B':
		y_coord = 2;
		break;
	case 'o':
	case 'O':
		y_coord = 3;
		break;
	default:
		break;
	}
	console.log("x "+x_coord + " y "+y_coord);
	if (x_coord < 1 || x_coord > 3) {
		return user + ", os valores das coordenada x precisam ser "+emo_x[0]+", "+emo_x[1]+" ou "+emo_x[2]+"\n" + PrintBoard();
	}
	if (y_coord < 1 || y_coord > 3) {
		return user + ", os valores das coordenada y precisam ser "+emo_y[0]+", "+emo_y[1]+" ou "+emo_y[2]+"\n" + PrintBoard();
	}
	if (ttt_board[x_coord-1][y_coord-1] != 0) {
		return user + ", o espaço já está preenchido! Tente outro!\n" + PrintBoard();
	}

	ttt_board[x_coord-1][y_coord-1] = turn;
	turn = -turn;
	
	var res = EvalBoard();
	if(res == 2){
		var msg = user + ", a partida terminou empatada!\n" + PrintBoard();
		ResetGame();
		return msg;
	}
	if(res == 1 || res == -1){
		var msg = user + ", o " + PrintSpace(res) + " venceu a partida!\n" + PrintBoard();
		ResetGame();
		return msg;
	}
	
	var msg = user + "jogou por " + PrintSpace(-turn) + " em " + emo_x[x_coord-1] + "x" + emo_y[y_coord-1]+". Vez de " + PrintSpace(turn) + " jogar!\n";
	return msg + PrintBoard();
}

module.exports = {
	execute : function(struct) {
		return TTTCommand(struct.message.from.first_name, struct.message.text);
	},
	help : function() {
		return "/ttt <coord x> <coord y> - jogar jogo da velha!";
	}
}; 