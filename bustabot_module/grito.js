commandName = "/grito";

function Command(user, vs_msg) {
	var msg = "";
	if (!vs_msg) {
		msg = user + ", diga algo pra eu gritar!";
	} else {
		size = Math.min(20,vs_msg.length);
		msg = "<code>";
		for(var i=0;i<size;i++){
			for(var j=0;j<size;j++){
				msg += vs_msg.charAt(Math.max(i,j));
			}
			msg += '\n';
		}
		msg += "</code>";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text.substring(commandName.length+1));
  },
  help: function () {
    return commandName+" [frase]";
  }
};