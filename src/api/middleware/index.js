const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const setupDatabase = require('./database');
const { init } = require('./socketio');

const setupMiddleware = (app, http) => {
  setupDatabase();
  init(http);
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err);
    }

    return res.status(500).json(err);
  });
};

module.exports = setupMiddleware;
