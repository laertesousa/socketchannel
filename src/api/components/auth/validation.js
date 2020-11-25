
const { auth } = require('./schemas');

const authValidation = {
  body: auth
};

module.exports = {
  authValidation
};
