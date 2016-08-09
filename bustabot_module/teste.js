function lol(val){
	return val*2;
}

module.exports = {
  execute: function (struct) {
    return "testando";
  },
  help: function () {
    return "/teste - apenas comando de teste";
  }
};