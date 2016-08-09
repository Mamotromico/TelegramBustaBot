function Command(user, rpg_msg) {
	var target = rpg_msg;
	var target_name = user;
	if (target != "") {
		target_name = target;
	}
	var value = 0;
	for (var i = 0; i < target_name.length; i++) {
		value += target_name.charCodeAt(i);
	}
	var rpg_class = ["Guerreiro", "Mago", "Ladino", "Druida", "Caçador", "Clerigo", "Paladino", "Druida", "Bárbaro", "Bruxo", "Bardo", "Dançarino", "Templário", "Mendigo", "Cavaleiro"];
	if (target_name == user) {
		var msg = user + ", sua classe de RPG é <code>" + rpg_class[value % rpg_class.length] + "</code>!";
	} else {
		var msg = user + ", a classe de RPG do(a) " + target_name + " é <code>" + rpg_class[value % rpg_class.length] + "</code>!";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "[nome] - Descubra sua classe na fantasia!";
  }
};