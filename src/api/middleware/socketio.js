const io = require('socket.io');
const channelsService = require('../components/channels/service');

let _instance = null;

const getInstance = () => {
  return _instance;
};

const handleConnection = async socket => {
  socket.on('disconnect', handleDisconnect);
  const { channel: channelName, accessToken } = socket.handshake.query;
  const channel = await channelsService.getChannel(channelName, accessToken);

  if (channel) {
    socket.join(channel.name);
  }
};

const handleDisconnect = () => {
  console.log('user disconnected');
};

const init = app => {
  _instance = io(app, {
    cors: {
      origin: 'http://localhost:3001',
      methods: ['GET', 'POST']
    }
  });
  _instance.on('connection', handleConnection);

  return _instance;
};

module.exports = {
  init,
  getInstance
};
