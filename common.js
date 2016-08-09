var https = require('https');

var SendMessage = function (struct, msg, mode, key) {
	var final_msg = encodeURI(msg);
	var final_request = "https://api.telegram.org/bot"+key+"/sendMessage?chat_id=" + struct.message.chat.id + "&text=" + final_msg + "&reply_to_message_id=" + struct.message.message_id+(mode!=""?"&parse_mode="+mode:"");
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

function HelpCommand(struct, bot) {
	var msg = struct.message.from.first_name + ", você gostaria de saber mais sobre o BustaBot?\n";
	msg += "O bot possui os seguintes comandos: \n";
	for (var mod in bot.modules) {
		if (bot.modules.hasOwnProperty(mod)) {
			//console.log("Printing "+mod+" help:" + modules[mod].help());
			msg += "/"+ mod + " " + bot.modules[mod].help() + "\n";
		}
	}
	msg += bot.help();
	
	//msg = "wat";
	return msg;
}

var PrepareCommandString = function (str,mod,botname){
	var reg = new RegExp("^\\/"+mod+"(?:"+botname+")?\\s?(.*)$");
	var cap = str.match(reg);
	if(cap.length!=2){
		console.log("No command captured");
		return "";
	}
	console.log("Exp captured"+cap[1]);
	return cap[1];
}

function BotFatherCommand(bot){
	var msg = "help - shows help\n";
	for (var mod in bot.modules) {						
		if (bot.modules.hasOwnProperty(mod)) {
			msg += mod+" - "+bot.modules[mod].help()+"\n";
		}
	}
	return msg;
}
	
module.exports = {
	PrepareCommandString: PrepareCommandString,
	SendMessage: SendMessage,

	GetFromBot: function (bot){
		https.get("https://api.telegram.org/bot"+bot.key+"/getUpdates?offset=" + bot.last_update, function(res) {
			if (res.statusCode == 200) {
				var http_input = "";
				res.setEncoding('utf8');
				res.on('data', function(chunk) {
					http_input += chunk;
				});
				res.on('end', function(a) {
					obj = JSON.parse(http_input);
					bot.AnswerMessages(obj,bot);
					http_input = "";
				});
			}
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});
	},
	AnswerMessages: function (obj, bot) {
		res = -1;
		if(!bot){
			console.log("Invalid BOT");
		}
		// Check if the message is OK!
		if (obj.ok) {
			var size = obj.result.length;
			// Treat all available messages.
			for (var m = 0; m < size; m++) {
				var struct = obj.result[m];
				// Check if the message was not previously parsed.
				if (struct.update_id < bot.last_update) {
					continue;
				}
				// Update the last message id parsed.
				bot.last_update = Math.max(bot.last_update, struct.update_id + 1);

				console.log("Answering MSG ID: " + struct.update_id + " from " + struct.message.from.first_name);
				console.log(struct.message.text);

				// Check if the message is not empty
				if(!struct.message || !struct.message.text){
					console.log("ERROR: Message was empty");
					continue;
				}
				
				if (struct.message.text) {
					for (var mod in bot.modules) {
						if (bot.modules.hasOwnProperty(mod)) {
							if(struct.message.text.isCommand(mod)){
								struct.message.text = PrepareCommandString(struct.message.text,mod,bot.botname);
								SendMessage(struct, bot.modules[mod].execute(struct),"HTML",bot.key);
								return;
							}
						}
					}
					if (struct.message.text.isCommand("help")) {
						SendMessage(struct, HelpCommand(struct,bot),"",bot.key);
					}else if(struct.message.text.indexOf(bot.botname)>-1){
						SendMessage(struct, bot.mention(struct),"",bot.key);
					}else if(struct.message.text.isCommand("botfather")){
						SendMessage(struct, BotFatherCommand(bot),"",bot.key);
					}else{
						console.log("Not a command. Ignore.");
					}
				}
			}
		}
	},
}