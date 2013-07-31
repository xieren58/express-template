'use strict';

var home = require('./home');

exports = module.exports = function (app) {
  app.get('/', home.index);
};