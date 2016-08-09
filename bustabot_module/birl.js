var msgs = [
"TÁ SAINDO DA JAULA, O <b>MONSTRO</b>!",
"BIIIIRRRLLL!!!",
"É 37 ANOS PORRA!",
"AQUI É <b>BODYBUILDER</b>, PORRA!",
"SAÍ DE CASA, COMI PRA CARALHO!",
"QUE NÃO VAI DAR, RAPAZ?",
"O MUTANTE CHEGOU!",
"É HORA DO SHOW, PORRA!"
]

var count = Math.floor(Math.random()*msgs.length);

function Command() {
	count++;
	count%=msgs.length;
	var msg = msgs[count];
	return msg;
}

module.exports = {
  execute: function (struct) {
    return Command();
  },
  help: function () {
    return "Solta uma frase monstro";
  }
};