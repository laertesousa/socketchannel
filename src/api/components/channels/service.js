const { Channel } = require('./models');
const eventsService = require('../../../services/events');

const getChannels = async () =>
  await Channel.find().exec()

const createNewChannel = async (name, url, accessToken) =>
  await Channel.create({ name, url, accessToken });

const sendMessage = (channel, data) => {
  eventsService.sendMessage(channel, data);
};

const getChannel = async (name, accessToken) =>
  await Channel.findOne({ name, accessToken });

module.exports = {
  getChannels,
  createNewChannel,
  getChannel,
  sendMessage
};
