function AskCommand(user, question) {
	msg = user + ", eu sinceramente não sei.";
	SendMessage(chat_id, msg, msg_id);
}

module.exports = {
  execute: function (struct) {
    return AskCommand(struct.message.from.first_name,struct.message.text);
  },
  help: function () {
    return "/ask <algo> - Pergunte qualquer coisa ao @BustaBot!";
  }
};