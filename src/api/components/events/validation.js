const { Joi } = require('express-validation');

const eventValidation = {
  body: Joi.object({
    event: Joi.object({
      channelName: Joi.string()
        .required(),
      data: Joi.object()
        .required(),
    })
      .required(),
  }),
};

module.exports = {
  eventValidation
};
