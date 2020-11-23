const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();
const http = require('http').createServer(app);

middleware(app, http);
routes(app);

module.exports = http;
