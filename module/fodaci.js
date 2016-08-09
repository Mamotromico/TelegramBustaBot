function FodaciCommand(user) {
	var msg = user + ", fodaci vc. '-'";
	return msg;
}

module.exports = {
  execute: function (struct) {
    return FodaciCommand(struct.message.from.first_name);
  },
  help: function () {
    return "/fodaci - d? uma resposta boa para isso.";
  }
};