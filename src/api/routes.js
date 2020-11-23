const channelsRoutes = require('./components/channels/routes');
const eventsRoutes = require('./components/events/routes');

const setupRoutes = app => {
  channelsRoutes(app);
  eventsRoutes(app);
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};

module.exports = setupRoutes;
