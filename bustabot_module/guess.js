var guess_number = Math.floor(Math.random() * 1000) + 1;
var guess_placar = [];

function GuessCommand(user, guess) {
	if (guess == "") {
		return user + ", você não chutou um número!";
	}
	var value = parseInt(guess);
	if (isNaN(value)) {
		return user + ", o chute que você deu não é um número válido!";
	}
	var msg = "";
	console.log("The values are:" + value + " " + guess_number);
	if (value > guess_number) {
		msg += user + ", o número que estou pensando é <code>menor</code> que isso!";
	} else if (value < guess_number) {
		msg += user + ", o número que estou pensando é <code>maior</code> que isso!";
	} else {
		msg += user + ", parabéns! <code>Acertou</code> o número! Vou gerar outro!";
		guess_number = Math.floor(Math.random() * 1000) + 1;
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return GuessCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "<valor> - Adivinhe o número que estou pensando!";
  }
};