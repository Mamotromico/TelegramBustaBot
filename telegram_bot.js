#!/usr/bin/env node
var https = require('https');

var key = require('./key');

var modules = {
	//ask: require('./module/ask'),
	//attr: require('./module/attr'),
	bubuntu: require('./module/bubuntu'),
	coin: require('./module/coin'),
	//dice: require('./module/dice'),
	//fodaci: require('./module/fodaci'),
	//guess: require('./module/guess'),
	//math: require('./module/math'),
	//rpg: require('./module/rpg'),
	//teste : require('./module/teste'),
	//ttt : require('./module/ttt'),
	//versus: require('./module/versus'),	
	//grito: require('./module/grito'),	
	//mata: require('./module/mata'),	
	//birl: require('./module/birl'),	
}

var last_update_id = 0;

if ( typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function(str) {
		return this.indexOf(str) === 0;
	};
}

if ( typeof String.prototype.isCommand != 'function') {
	String.prototype.isCommand = function(str) {
		return (this.startsWith("/" + str) || (this.startsWith("/" + str + "@BustaBot")) );
	};
}

function PrepareCommandString(str,mod){
	var reg = new RegExp("^\\/"+mod+"(?:@BustaBot)?\\s?(.*)$");
	var cap = str.match(reg);
	if(cap.length!=2){
		console.log("No command captured");
		return "";
	}
	console.log("Exp captured"+cap[1]);
	return cap[1];
}

function AnswerMessages(obj) {
	// Check if the message is OK!
	if (obj.ok) {
		var size = obj.result.length;
		// Treat all available messages.
		for (var m = 0; m < size; m++) {
			var struct = obj.result[m];
			// Check if the message was not previously parsed.
			if (struct.update_id < last_update_id) {
				continue;
			}
			// Check if the message is not empty
			if(!struct.message || !struct.message.text){
				console.log("ERROR: Message was empty");
				continue;
			}
			// Update the last message id parsed.
			last_update_id = Math.max(last_update_id, struct.update_id + 1);

			console.log("Answering MSG ID: " + struct.update_id + " from " + struct.message.from.first_name);
			console.log(struct.message.text);

			if (struct.message.text) {
				for (var mod in modules) {
					if (modules.hasOwnProperty(mod)) {
						if(struct.message.text.isCommand(mod)){
							struct.message.text = PrepareCommandString(struct.message.text,mod);
							SendMessage(struct, modules[mod].execute(struct),"HTML");
							return;
						}
					}
				}
				if (struct.message.text.isCommand("help")) {
					SendMessage(struct, HelpCommand(struct),"");
				}else if(struct.message.text.indexOf("@BustaBot")>-1){
					SendMessage(struct, MentionCommand(struct),"");
				}else if(struct.message.text.isCommand("botfather")){
					SendMessage(struct,BotFatherCommand(),"");
				}else{
					console.log("Not a command. Ignore.");
				}
			}
		}
	}
}

function BotFatherCommand(){
	var msg = "help - shows help\n";
	for (var mod in modules) {						
		if (modules.hasOwnProperty(mod)) {
			msg += mod+" - "+modules[mod].help()+"\n";
		}
	}
	return msg;
}

function HelpCommand(struct) {
	var msg = struct.message.from.first_name + ", você gostaria de saber mais sobre o BustaBot?\n";
	msg += "O bot possui os seguintes comandos: \n";
	for (var mod in modules) {
		if (modules.hasOwnProperty(mod)) {
			//console.log("Printing "+mod+" help:" + modules[mod].help());
			msg += "/"+ mod + " " + modules[mod].help() + "\n";
		}
	}
	// msg += "/ask <algo> - Pergunte qualquer coisa ao @BustaBot!\n";
	// msg += "/guess <valor> - Adivinhe o número que estou pensando!\n";
	// msg += "/versus ([competidores]) - Descubra quem é o melhor!\n";
	msg += "/help - Peça ajuda ao @BustaBot!\n";
	msg += "<>; são parâmetros obrigatórios.";
	msg += "() são parâmetros múltiplos.";
	msg += "[] são parâmetros opcionais.";
	
	//msg = "wat";
	return msg;
}

function MentionCommand(struct) {
	var msg = "Digala, " + struct.message.from.first_name + ", meu chapa!";
	return msg;
}

function SendMessage(struct, msg, mode) {
	var final_msg = encodeURI(msg);
	var final_request = "https://api.telegram.org/bot"+key.value()+"/sendMessage?chat_id=" + struct.message.chat.id + "&text=" + final_msg + "&reply_to_message_id=" + struct.message.message_id+(mode!=""?"&parse_mode="+mode:"");
	//console.log(final_request);
	https.get(final_request, function(res) {
		if (res.statusCode == 200) {
			console.log("Sending msg 200, OK!");
		}else{
			console.log("Sending msg ERROR: " + res.statusCode);
			// TODO imprimir erro no console?
		}
	}).on('error', function(e) {
		console.log("Sending msg ERROR: " + e.message);
	});
}

// Will keep scanning for new messages, and answering them.
setInterval(function() {
	https.get("https://api.telegram.org/bot"+key.value()+"/getUpdates?offset=" + last_update_id, function(res) {
		if (res.statusCode == 200) {
			var http_input = "";
			res.setEncoding('utf8');
			res.on('data', function(chunk) {
				http_input += chunk;
			});
			res.on('end', function(a) {
				obj = JSON.parse(http_input);
				AnswerMessages(obj);
				http_input = "";
			});
		}
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
}, 100);

