const { getInstance } = require('../api/middleware/socketio');

const sendMessage = (channel, data) => {
  if (!channel || !data) {
    throw new Error('Channel and data is required');
  }

  getInstance().emit(channel, data);
};

module.exports = {
  sendMessage
};
