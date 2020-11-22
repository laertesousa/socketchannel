const { Channel } = require('./models');

const createNewChannel = async name => await Channel.create({ name });

module.exports = {
  createNewChannel
};
