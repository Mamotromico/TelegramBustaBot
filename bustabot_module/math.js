function MathCommand(user, msg) {
	var target = msg.split(" ");
	var subject = "matemática";
	if (target.length == 2) {
		subject = target[1];
	}
	var value = 0;
	for (var i = 0; i < user.length; i++) {
		value += user.charCodeAt(i);
	}
	for (var i = 0; i < subject.length; i++) {
		value += subject.charCodeAt(i);
	}
	
	var grade = Math.floor(value%100)/10;
	
	if( user == "Ricardo" ){
		grade = Math.min(10, grade + 1);
	}
	
	var msg = user + " fez uma prova de " + subject + " e tirou nota "+ grade +"!";

	return msg;
}

module.exports = {
  execute: function (struct) {
    return MathCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/math [matéria] - Saiba quanto você tirou na prova!";
  }
};