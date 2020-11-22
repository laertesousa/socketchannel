const channelsRoutes = require('./components/channels/routes');

const setupRoutes = app => {
  channelsRoutes(app);
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};

module.exports = setupRoutes;
