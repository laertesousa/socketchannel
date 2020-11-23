const io = require('socket.io');
const roomsService = require('../components/rooms/service');

let _instance = null;

const getInstance = () => {
  return _instance;
};

const handleConnection = async socket => {
  socket.on('disconnect', handleDisconnect);
  const { room: roomName, accessToken } = socket.handshake.query;
  const room = await roomsService.getByName(roomName, accessToken);

  if (room) {
    console.log(`${socket.id} joined room ${room.name}`);
    socket.join(room.name);
  } else {
    console.warn(`${roomName} does not exist.`);
  }
};

const handleDisconnect = () => {
  console.log('user disconnected');
};

const init = app => {
  _instance = io(app, {
    cors: {
      origin: process.env.ALLOWED_CORS_ORIGIN,
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
