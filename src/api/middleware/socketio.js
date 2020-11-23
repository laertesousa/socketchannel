const io = require('socket.io');

let _instance = null;

const getInstance = () => {
  return _instance;
};

const handleConnection = socket => {
  socket.on('disconnect', handleDisconnect);
  socket.on('new-order', msg => {
    console.log(msg);
  });
};

const handleDisconnect = () => {
  console.log('user disconnected');
};

const init = app => {
  _instance = io(app);
  _instance.on('connection', handleConnection);

  return _instance;
};

module.exports = {
  init,
  getInstance
};
