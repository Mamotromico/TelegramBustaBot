commandName = "/birl";

function Command(user, vs_msg) {
	var msg = "Tá saindo da jaula, o monstro!";
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