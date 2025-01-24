const { messages, getMessageById } = require('../database/db');

let nextId = 3;
const {getFormattedDateTime} = require('../utils/getFormattedDateTime')

async function getMessageDetails (req, res) {
  const { messageId } = req.params;

  try {
  const messageDetails = await getMessageById(Number(messageId));
  console.log(messageDetails);
  res.render("details", { message: messageDetails });
  } catch (error) {
    console.log(error);
  }
};


async function postNewMessage(req, res){
    const {messageText, author} = req.body;

    messages.push({
        id: nextId++,
        text: messageText, 
        user: author, 
        added: getFormattedDateTime()
    });
    res.redirect("/");
}

module.exports = { postNewMessage, getMessageDetails };