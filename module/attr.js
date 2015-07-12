function PrintAttribute(value){
	var attr = "";
	for(var i=0; i<value; i++){
		attr += "⚫";
	}
	for(var i=value; i<10; i++){
		attr += "⚪";
	}
	return attr;
}

function AttrCommand(user, msg) {
	var target = msg.split(" ");
	
	var target_name = user;
	if (target.length == 2) {
		target_name = target[1];
	}
	
	var attributes = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
	
	var out = "";
	
	if(user == target_name){
		out += user + ", seus atributos são os seguintes:\n";
	}else{
		out += user + ", os atributos de " + target_name + " são os seguintes:\n";
	}
	
	var name_value = 0;
	for (var i = 0; i < target_name.length; i++) {
		name_value += target_name.charCodeAt(i);
	}
	for(var a = 0; a<attributes.length; a++){
		var attribute_value = 0;
		for (var i = 0; i < attributes[a].length; i++) {
			attribute_value += attributes[a].charCodeAt(i);
		}
		var res = Math.floor(name_value * attribute_value)%10+1;
		out += attributes[a] + ":\t\t" + PrintAttribute(res) + "\n";
	}

	return out;
}

module.exports = {
  execute: function (struct) {
    return AttrCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/attr [user] - Descubra quais são seus atributos!";
  }
};