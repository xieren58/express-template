#!/usr/bin/env node
'use strict';

var http = require('http');
var path = require('path');

var express = require('express');

var routes = require('./routes');

var app = express();
exports = module.exports = app;

// check env: production or development
var env_production = 'production' === app.get('env') ? true : false;

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
if (env_production) {
  app.use(express.logger('dev'));
}
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.csrf());
app.use(function (req, res, next) {
  res.locals.token = req.session ? req.session._csrf : '';
  res.locals.session = req.session;
  next();
});
app.use(express.compress());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.enable('trust proxy');
app.disable('x-powered-by');

// for 404
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

if (env_production) {
  // for production
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('500');
  });
} else {
  // for development
  app.use(express.errorHandler());
  app.locals.pretty = true;  // for jade
}

routes(app);

if (require.main === module) {
  http.createServer(app).listen(app.get('port'), function () {
    return console.log('Express server listening on port %d', app.get('port'));
  });
}
