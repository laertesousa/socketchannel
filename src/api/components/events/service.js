const { Event } = require('./models');
const { Channel } = require('../channels/models');

const createNewEvent = async (channelName, data) => {
  const channel = Channel.findOne({ name: channelName });
  await Event.create({ channel, data });
};

module.exports = {
  createNewEvent
};
