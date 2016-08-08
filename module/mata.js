commandName = "/mata";

frases = [
	["Bateu em","lentamente."]
]

function Command(user, vs_msg) {
	var msg = "";
	if (!vs_msg) {
		msg = user + ", diga alguém pra eu matar!";
	} else {
		msg = frases[0][0] + frases[0][1];
		msg += "Será que deu?";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text.substring(commandName.length+1));
  },
  help: function () {
    return commandName+" [frase] - Faça sua palavra ser ouvida!";
  }
};