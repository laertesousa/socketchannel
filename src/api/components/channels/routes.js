const controller = require('./controller');

const channelsRoutes = app => {
  app.post('/channels', controller.post);
  app.post('/channels/message', controller.handleSendMessagePost);
};

module.exports = channelsRoutes;
