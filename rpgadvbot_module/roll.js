function Command(user, cmd) {
	var out = "";
	
	var reg = new RegExp("^(?:(\\d*)d)?(\\d+)(?:\\+(\\d+))?$");
	var arr = cmd.match(reg);
	
	if(!arr){
		out = user+", o formato de dado que você digitou está incorreto. Tente '20', '1d20', '20+5' ou '1d20+5'.";
		return out;
	}
	var num = 1;
	if(arr[1]){
		var n = parseInt(arr[1]);
		if(n){
			num = n;
		}
	}
	var s = parseInt(arr[2]);
	var size = 6;
	if(s){
		size = s;
	}
	var bonus = 0;
	if(arr[3]){
		var n = parseInt(arr[3]);
		if(n){
			bonus = n;
		}
	}
	
	out += "<b>"+arr[0]+"</b>\n<code>";
	
	var sum = 0;
	for(var n = 0; n<num; n++){
		res = Math.floor(Math.random()*size)+1;
		if(num>1){
			out += "" + res + ((n!=(num-1))?"+":"");
		}
		sum += res;
	}
	out += (bonus>0?"+"+bonus:"") + " = " + (sum+bonus)+ "</code>";
	
	//console.log("num"+num);
	//console.log("size"+size);
	//console.log("bonus"+bonus);

	return out;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "([NdS+B]) - Joga N dados de tamanho S com bônus B!";
  }
};