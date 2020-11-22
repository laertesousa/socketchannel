const channelsRoutes = require('./components/channels/routes');

const setupRoutes = app => {
  channelsRoutes(app);
  app.get('/', (req, res) => {
    res.send('Testing review app!');
  });
};

module.exports = setupRoutes;
