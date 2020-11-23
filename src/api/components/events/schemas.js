const { Joi } = require('express-validation');

const event = Joi.object({
  roomName: Joi.string().required(),
  channel: Joi.string().required(),
  data: Joi.object().required()
}).required();

module.exports = {
  event
};
