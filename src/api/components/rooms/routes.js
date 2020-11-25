const { validate } = require('express-validation');
const passport = require('passport');

const { roomValidation } = require('./validation');
const controller = require('./controller');

const roomsRoutes = app => {
  app.get('/rooms', controller.get);
  app.post('/rooms', validate(roomValidation), controller.post);
};

module.exports = roomsRoutes;
