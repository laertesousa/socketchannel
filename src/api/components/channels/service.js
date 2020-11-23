const { Channel } = require('./models');
const eventsService = require('../../../services/events');

const createNewChannel = async (name, url, accessToken) => await Channel.create({ name, url, accessToken });
const sendMessage = (channel, data) => {
  eventsService.sendMessage(channel, data);
};

module.exports = {
  createNewChannel,
  sendMessage
};
