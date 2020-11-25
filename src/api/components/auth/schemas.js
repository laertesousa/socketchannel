const { Joi } = require('express-validation');

const auth = Joi.object({
  appId: Joi.string().required(),
  token: Joi.string().required(),
}).required();

module.exports = {
  auth
};
