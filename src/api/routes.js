const roomsRoutes = require('./components/rooms/routes');
const eventsRoutes = require('./components/events/routes');

const setupRoutes = app => {
  roomsRoutes(app);
  eventsRoutes(app);
};

module.exports = setupRoutes;
