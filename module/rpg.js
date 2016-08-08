function RPGCommand(user, rpg_msg) {
	var target = rpg_msg.split(" ");
	var target_name = user;
	if (target.length == 2) {
		target_name = target[1];
	}
	var value = 0;
	for (var i = 0; i < target_name.length; i++) {
		value += target_name.charCodeAt(i);
	}
	var rpg_class = ["Guerreiro", "Mago", "Ladino", "Druida", "Caçador", "Clerigo", "Paladino", "Druida", "Bárbaro", "Bruxo", "Bardo", "Dançarino", "Templário", "Mendigo", "Cavaleiro"];
	if (target_name == user) {
		var msg = user + ", sua classe de RPG eh " + rpg_class[value % rpg_class.length] + "!";
	} else {
		var msg = user + ", a classe de RPG do(a) " + target_name + " eh " + rpg_class[value % rpg_class.length] + "!";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return RPGCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/rpg [nome] - Descubra sua classe na fantasia!";
  }
};