var modules = {
	genatt: require('./rpgadvbot_module/genatt'),
}

var common = require('./common');

var key = "68412355:AAEg1HFoupBvrN9pe7LI2Jv-5SzHFxLYQUA";
var last_update_id = 0;
var botname = "@rpgadvbot";

function MentionCommand(struct) {
	var msg = "Digala, " + struct.message.from.first_name + ", meu chapa!";
	return msg;
}

function Help(){
	var msg = "";
	msg += "<> são parâtros obrigatórios.\n";
	msg += "() são parâtros múltiplos.\n";
	msg += "[] são parâtros opcionais.";
	return msg;
}

module.exports = {
	key: key,
	last_update: last_update_id,
	AnswerMessages: function (obj,bot) {
		common.AnswerMessages(obj,bot);
	},
	botname: botname,
	modules: modules,
	help: Help,
	mention: MentionCommand,
}