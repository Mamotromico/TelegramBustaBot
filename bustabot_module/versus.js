function VersusCommand(user, vs_msg) {
	vs_data = vs_msg.split(" ");
	var msg = "";
	if (vs_data.length < 2) {
		msg = user + ", tem que ter pelo menos dois competidores!";
	} else {
		var res = Math.floor(Math.random() * (vs_data.length));
		msg = user + ", o vencedor supremo foi <code>" + vs_data[res] + "</code>!";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return VersusCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "([competidores])";
  }
};