function CoinCommand(user, coin) {
	var inp = coin;
	if (inp) {
		var coin = ["cara", "coroa"];
		var res = Math.floor(Math.random() * 2);
		var msg = user + " jogou uma moeda achando que ia tirar <code>" + inp + "</code> e tirou <code>" + coin[res] + "</code>!";
		if (inp == coin[res]) {
			msg += " Parabéns campeão! Você <code>ganhou</code>!";
		} else {
			msg += " <code>Perdeu</code>, trouxa! Hahaha!";
		}
		return msg;
	} else {
		var coin = ["cara", "coroa"];
		var res = Math.floor(Math.random() * 2);
		var msg = user + " jogou uma moeda e tirou <code>" + coin[res] + "</code>!";
		return msg;
	}
}

module.exports = {
  execute: function (struct) {
    return CoinCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "[cara|coroa] - Jogue uma moeda, para decidir coisas entre osamigo!";
  }
};