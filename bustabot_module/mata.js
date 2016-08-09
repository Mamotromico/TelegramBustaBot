acao = [
"bateu em",
"esmurrou",
"espancou",
"estuprou",
"nocauteou",
"matou",
"deu infinitos socos em",
"usou choque do trovão em",
"molestou",
"lambeu",
"capturou",
"ultou em",
"meteu um sarrafo em",
"rebolou uma havaiana de pau em",
"cutucou",
"pokeou",
]

efeito = [
"",
"",
"com estilo",
"lentamente",
"sem piedade",
"com o objetivo de matar",
"só de maldade",
"por vingança",
"porque é engraçado",
"com toda sua fúria",
"rapidamente",
"sem trégua",
"com gosto",
"pra valer",
]


function Command(user, target) {
	var msg = "";
	if (!target) {
		msg = user + ", diga alguém pra eu matar!";
	} else {
		msg = user + " " + acao[Math.floor(Math.random()*acao.length)] + " " + target + " " + efeito[Math.floor(Math.random()*efeito.length)] + ".";
	}
	return msg;
}

module.exports = {
  execute: function (struct) {
    return Command(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "[usuário] - Mata alguém de alguma forma";
  }
};