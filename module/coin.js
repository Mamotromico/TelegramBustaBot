function CoinCommand(user, coin) {
	var inp = coin.split(" ");
	if (inp.length == 2) {
		var coin = ["cara", "coroa"];
		var res = Math.floor(Math.random() * 2);
		var msg = user + " jogou uma moeda achando que ia tirar " + inp[1] + " e tirou " + coin[res] + "!";
		if (inp[1] == coin[res]) {
			msg += " Parabéns campeão! Você ganhou!";
		} else {
			msg += " Perdeu, trouxa! Hahaha!";
		}
		return msg;
	} else {
		var coin = ["cara", "coroa"];
		var res = Math.floor(Math.random() * 2);
		var msg = user + " jogou uma moeda e tirou " + coin[res] + "!";
		return msg;
	}
}

module.exports = {
  execute: function (struct) {
    return CoinCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/coin [cara|coroa] - Jogue uma moeda, para decidir coisas entre osamigo!";
  }
};