commandName = "/grito";

function Command(user, vs_msg) {
	var msg = "";
	if (!vs_msg) {
		msg = user + ", tem que ter pelo menos dois competidores!";
	} else {
		size = Math.min(20,vs_msg.length);
		msg = "```";
		for(var i=0;i<size;i++){
			for(var j=0;j<size;j++){
				msg += vs_msg.charAt(Math.min(i,j));
			}
			msg += '\n';
		}
		msg += "```";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text.substring(commandName.length));
  },
  help: function () {
    return commandName+" [frase] - Faça sua palavra ser ouvida!";
  }
};