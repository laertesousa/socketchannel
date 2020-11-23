const { Channel } = require('./models');
const eventsService = require('../../../services/events');

const createNewChannel = async name => await Channel.create({ name });
const sendMessage = (channel, data) => {
  eventsService.sendMessage(channel, data);
};

module.exports = {
  createNewChannel,
  sendMessage
};
