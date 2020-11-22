const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const setupDatabase = require('./database');

const setupMiddleware = app => {
  setupDatabase();
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};

module.exports = setupMiddleware;
