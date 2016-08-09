var modules = {
	//ask: require('./bustabot_module/ask'),
	attr: require('./bustabot_module/attr'),
	bubuntu: require('./bustabot_module/bubuntu'),
	coin: require('./bustabot_module/coin'),
	dice: require('./bustabot_module/dice'),
	//fodaci: require('./bustabot_module/fodaci'),
	guess: require('./bustabot_module/guess'),
	//math: require('./bustabot_module/math'),
	rpg: require('./bustabot_module/rpg'),
	//teste : require('./bustabot_module/teste'),
	//ttt : require('./bustabot_module/ttt'),
	versus: require('./bustabot_module/versus'),	
	//grito: require('./bustabot_module/grito'),	
	mata: require('./bustabot_module/mata'),	
	birl: require('./bustabot_module/birl'),	
}

var common = require('./common');

var key = "113133208:AAE5LIdg0knjpN6qr3PSeVhE6Xroyu9IrSM";
var last_update_id = 0;
var botname = "@BustaBot";

function MentionCommand(struct) {
	var msg = "Digala, " + struct.message.from.first_name + ", meu chapa!";
	return msg;
}

function Help(){
	var msg = "";
	msg += "<> são parâmetros obrigatórios.\n";
	msg += "() são parâmetros múltiplos.\n";
	msg += "[] são parâmetros opcionais.";
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