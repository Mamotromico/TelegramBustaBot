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
    return Command(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/grito [frase] - Faça sua palavra ser ouvida!";
  }
};