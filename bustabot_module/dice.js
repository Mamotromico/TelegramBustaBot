function DiceCommand(user, dice) {
	var res = dice.split(" ");
	res = res.filter(function(s){return s!=""});
	console.log(res);

	var msg = user;
	var dice_count = res.length;

	var valid = true;

	var dice_input = [];

	for (var i = 0; i < res.length; i++) {
		if (isNaN(parseInt(res[i]))) {
			valid = false;
			break;
		} else {
			dice_input.push(Math.max(1, parseInt(res[i])));
		}
	}

	if (valid) {
		if (dice_input.length == 0) {
			msg += " jogou um dado! E tirou ";
			var result = Math.floor(Math.random() * 6) + 1;
			msg += "" + result + "(1-6)!";
		} else if (dice_input.length == 1) {
			var dice_size = dice_input[0];
			msg += " jogou um dado! E tirou ";
			var result = Math.floor(Math.random() * dice_size) + 1;
			msg += "" + result + "(1-" + dice_size + ")!";
		} else {
			msg += " jogou <code>" + dice_input.length + "</code> dados! E tirou:";
			for (var i = 0; i < dice_input.length; i++) {
				var result = Math.floor(Math.random() * dice_input[i]) + 1;
				msg += "\n" + result + " <i>(1-" + dice_input[i] + ")</i>";
			}
		}
	} else {
		msg += ", você mandou um comando inválido! O correto seria /dice [tamanho dado(n)]";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return DiceCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "([tamanho dado]) - Jogue um dado!";
  }
};