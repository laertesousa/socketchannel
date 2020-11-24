const { validate } = require('express-validation');


const { authValidation } = require('./validation');
const controller = require('./controller');
const { eventValidation } = require('../events/validation');

const authRoutes = app => {
    app.post('/oauth', validate(authValidation), controller.post);
};

module.exports = authRoutes;