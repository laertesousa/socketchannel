const { validate } = require('express-validation');

const { eventValidation } = require('./validation');
const controller = require('./controller');

const eventsRoutes = app => {
  app.get('/events', controller.get);
  app.post('/events', validate(eventValidation), controller.post);
};

module.exports = eventsRoutes;
