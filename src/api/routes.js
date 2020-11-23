const path = require('path');
const channelsRoutes = require('./components/channels/routes');

const pageRoutes = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
  });
};

const setupRoutes = app => {
  channelsRoutes(app);
  pageRoutes(app);
};

module.exports = setupRoutes;
