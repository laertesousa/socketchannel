const roomsRoutes = require('./components/rooms/routes');
const eventsRoutes = require('./components/events/routes');
const authRoutes = require('./components/auth/routes');

const setupRoutes = app => {
  roomsRoutes(app);
  eventsRoutes(app);
  authRoutes(app);

};

module.exports = setupRoutes;
