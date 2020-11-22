const controller = require('./controller');

const channelsRoutes = app => {
  app.post('/channels', controller.post);
};

module.exports = channelsRoutes;
