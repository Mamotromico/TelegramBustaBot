function Command(user, msg) {
	var target = msg;
	
	var target_name = user;
	if (target != "") {
		target_name = target;
	}
	
	var attributes = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
	
	var out = "";
	
	if(user == target_name){
		out += user + ", seus atributos são os seguintes:\n";
	}else{
		out += user + ", os atributos de " + target_name + " são os seguintes:\n";
	}
	
	for(var a = 0; a<attributes.length; a++){
		var min = 999;
		var dice = "";
		var res = 0;
		for(var i=0;i<4;i++){
			var val = Math.floor(Math.random()*6)+1;
			dice += " " + val;
			min = Math.min(val,min);
			res+= val;
		}
		res -= min;
		out += attributes[a] + ":\t" + res + "(" + dice + " )\n";
	}

	return out;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "[user] - Gera atributos para D&D e Pathfinder!";
  }
};