#!/usr/bin/env node

'use strict';

var app, http;

http = require('http');

app = require('./app');

http.createServer(app).listen(app.get('port'), function () {
  return console.log('Express server listening on port %d', app.get('port'));
});
