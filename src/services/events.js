const { getInstance } = require('../api/middleware/socketio');

const sendMessage = (channel, data) => {
  if (!channel || !data) {
    throw new Error('Channel and data is required');
  }
  console.log('send message', channel, data);
  getInstance().to(channel).emit('new-order', data);
};

module.exports = {
  sendMessage
};
