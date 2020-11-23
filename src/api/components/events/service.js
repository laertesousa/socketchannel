const { Event } = require('./models');
const { Room } = require('../rooms/models');

const getEvents = async () =>
  await Event.find().exec()

const create = async (name, channel, data) => {
  const room = await Room.findOne({ name }).exec();
  return await Event.create({ room: room._id, channel, data });
};

module.exports = {
  getEvents,
  create
};
