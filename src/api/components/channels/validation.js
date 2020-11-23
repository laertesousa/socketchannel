const { Joi } = require('express-validation');

const channelValidation = {
  body: Joi.object({
    channel: Joi.object({
      name: Joi.string().required(),
      url: Joi.string(),
      accessToken: Joi.string().required()
    }).required()
  })
};

module.exports = {
  channelValidation
};
