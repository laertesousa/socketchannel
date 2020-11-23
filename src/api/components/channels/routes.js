const { validate } = require('express-validation');

const { channelValidation } = require('./validation');
const controller = require('./controller');

const channelsRoutes = app => {
  app.get('/channels', controller.get);
  app.post('/channels', validate(channelValidation), controller.post);
  app.post('/channels/message', controller.handleSendMessagePost);
};

module.exports = channelsRoutes;
