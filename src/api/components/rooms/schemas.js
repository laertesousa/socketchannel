const { Joi } = require('express-validation');

const room = Joi.object({
  name: Joi.string().required(),
  url: Joi.string(),
  accessToken: Joi.string().required()
}).required();

module.exports = {
  room
};
