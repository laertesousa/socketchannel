const { getInstance } = require('../api/middleware/socketio');

const sendMessage = (room, channel, data) => {
  if (!room || !channel || !data) {
    throw new Error('room, channel and data is required');
  }
  console.log('send message', room, channel, data);
  getInstance().to(room).emit(channel, data);
};

module.exports = {
  sendMessage
};
