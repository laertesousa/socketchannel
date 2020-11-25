const controller = require('./controller');
const { validate } = require('express-validation');
const { authValidation } = require('./validation');

const authRoutes = app => {

    app.get('/auth', controller.get);
    app.post('/auth', validate(authValidation), controller.post);
};

module.exports = authRoutes;