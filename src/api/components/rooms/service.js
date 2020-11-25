const { Room } = require('./models');

const getRooms = async () => await Room.find().exec();

const create = async (name, url, accessToken) =>
  await Room.create({ name, url, accessToken });

const getByName = async (name, accessToken) =>
  await Room.findOne({ name, accessToken });

module.exports = {
  getRooms,
  create,
  getByName
};
