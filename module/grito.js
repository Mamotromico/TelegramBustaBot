commandName = "/grito";

function Command(user, vs_msg) {
	var msg = "";
	if (!vs_msg) {
		msg = user + ", tem que ter pelo menos dois competidores!";
	} else {
		msg = vs_msg;
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