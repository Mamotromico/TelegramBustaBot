var https = require('https');

var key = require('./key');

var modules = {
	ask: require('./module/ask'),
	attr: require('./module/attr'),
	bubuntu: require('./module/bubuntu'),
	coin: require('./module/coin'),
	dice: require('./module/dice'),
	fodaci: require('./module/fodaci'),
	guess: require('./module/guess'),
	math: require('./module/math'),
	rpg: require('./module/rpg'),
	teste : require('./module/teste'),
	ttt : require('./module/ttt'),
	versus: require('./module/versus'),	
	grito: require('./module/grito'),	
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
			if(!struct.message || !struct.message.text){
				console.log("Invalid structures");
				continue;
			}
			// Update the last message id parsed.
			last_update_id = Math.max(last_update_id, struct.update_id + 1);

			//chat_id: struct.message.chat.id,
			//user_first_name: struct.message.from.first_name,
			//text_message: struct.message.text,
			//message_id: struct.message.message_id

			console.log("Answering MSG ID: " + struct.update_id + " from " + struct.message.from.first_name);
			console.log(struct.message.text);

			if (struct.message.text) {
				for (var mod in modules) {
					if (modules.hasOwnProperty(mod)) {
						if (struct.message.text.isCommand(mod)) {
							SendMessage(struct, modules[mod].execute(struct));
							return;
						}
					}
				}
				if (struct.message.text.isCommand("help")) {
					SendMessage(struct, HelpCommand(struct));
				}else if(struct.message.text.indexOf("@BustaBot")>-1){
					SendMessage(struct, MentionCommand(struct));
				}
			}
		}
	}
}

function HelpCommand(struct) {
	var msg = struct.message.from.first_name + ", você gostaria de saber mais sobre o BustaBot?\n";
	msg += "O bot possui os seguintes comandos: \n\n";
	for (var mod in modules) {
		if (modules.hasOwnProperty(mod)) {
			console.log("Printing "+mod+" help:" + modules[mod].help());
			msg += modules[mod].help() + "\n";
		}
	}
	// msg += "/ask <algo> - Pergunte qualquer coisa ao @BustaBot!\n";
	// msg += "/guess <valor> - Adivinhe o número que estou pensando!\n";
	// msg += "/versus ([competidores]) - Descubra quem é o melhor!\n";
	msg += "/help - Peca ajuda ao @BustaBot!\n\n";
	msg += "<> são parâmetros obrigatórios.\n";
	msg += "() são parâmetros múltiplos.\n";
	msg += "[] são parâmetros opcionais.\n";
	return msg;
}

function MentionCommand(struct) {
	var msg = "Digala, " + struct.message.from.first_name + ", meu chapa!";
	return msg;
}

function SendMessage(struct, msg) {
	//var final_msg = msg.replace(/[^a-zA-Z0-9 !,\(\)\-+\[\]\n@\{\}\\\/\<\>\|]/g, "*");
	var final_msg = encodeURI(msg);
	console.log("Sending msg: " + final_msg);
	https.get("https://api.telegram.org/bot"+key.value()+"/sendMessage?chat_id=" + struct.message.chat.id + "&text=" + final_msg + "&reply_to_message_id=" + struct.message.message_id+"&parse_mode=Markdown", function(res) {
		if (res.statusCode == 200) {
			console.log("Sending msg 200, OK!");
		}
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
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
}, 1000);

