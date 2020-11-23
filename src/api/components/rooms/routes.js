const { validate } = require('express-validation');

const { roomValidation } = require('./validation');
const controller = require('./controller');

const roomsRoutes = app => {
  app.post('/rooms', validate(roomValidation), controller.post);
};

module.exports = roomsRoutes;
