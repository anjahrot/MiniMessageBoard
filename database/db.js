const { getFormattedDateTime } = require('../utils/getFormattedDateTime');

const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: getFormattedDateTime()
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: getFormattedDateTime()
    }
  ];

  async function getMessageById(messageId) {
    return messages.find(message => message.id === messageId);
  };

  module.exports = { messages, getMessageById };