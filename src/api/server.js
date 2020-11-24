const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const auth = require('./middleware/passport');

const app = express();
const http = require('http').createServer(app);

middleware(app, http);
routes(app);
auth(app);

module.exports = http;
