var guess_number = Math.floor(Math.random() * 1000) + 1;
var guess_placar = [];

function GuessCommand(user, guess) {
	var g = guess.split(" ");
	if (g.length != 2) {
		return user + ", você não digitou o número correto de argumentos!";
	}
	var value = parseInt(g[1]);
	if (isNaN(value)) {
		return user + ", o argumento que você passou não é um numero!";
	}
	var msg = "";
	console.log("The values are:" + value + " " + guess_number);
	if (value > guess_number) {
		msg += user + ", o numero que estou pensando eh menor que isso!";
	} else if (value < guess_number) {
		msg += user + ", o numero que estou pensando eh maior que isso!";
	} else {
		msg += user + ", parabens! Acertou o numero!";
		guess_number = Math.floor(Math.random() * 1000) + 1;
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return GuessCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/guess <valor> - Adivinhe o número que estou pensando!";
  }
};