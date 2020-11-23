const { Room } = require('./models');
const eventsService = require('../../../services/events');

const create = async (name, url, accessToken) =>
  await Room.create({ name, url, accessToken });

const getByName = async (name, accessToken) =>
  await Room.findOne({ name, accessToken });

const sendMessage = (channel, data) => {
  eventsService.sendMessage(channel, data);
};

module.exports = {
  create,
  getByName,
  sendMessage
};
