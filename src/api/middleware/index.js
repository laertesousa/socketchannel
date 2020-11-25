const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const setupDatabase = require('./database');
const setupEventPoller = require('./setupEventPoller');
const { init } = require('./socketio');

const setupMiddleware = (app, http) => {
  setupDatabase(setupEventPoller);
  init(http);
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

};

module.exports = setupMiddleware;
