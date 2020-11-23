const path = require('path');
const channelsRoutes = require('./components/channels/routes');
const eventsRoutes = require('./components/events/routes');

const pageRoutes = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
  });
};

const setupRoutes = app => {
  channelsRoutes(app);
  eventsRoutes(app);
  pageRoutes(app);
};

module.exports = setupRoutes;
