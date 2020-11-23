const { Event } = require('./models');
const { Channel } = require('../channels/models');

const createNewEvent = async (channelName, data) => {
  const channel = await Channel.findOne({ name: channelName }).exec();
  return await Event.create({ channel: channel._id, data });
};

module.exports = {
  createNewEvent
};
