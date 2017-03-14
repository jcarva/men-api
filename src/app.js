const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// DB Setup
const db = require('./config/database');

// App Setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

// Router Setup
const router = require('./routes');
router(app);

// Error handler response
app.use(function (err, req, res, next) {
  if (app.get('env') !== 'development') delete err.stack;
  if (!err.status) err.status = 500;

  res.status(err.status).json({
    error: {
      message: err.message,
      status: err.status,
      stack: err.stack
    }
  });
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  if (app.get('env') !== 'development') delete err.stack;

  res.status(err.status).json({
    error: {
      message: err.message,
      status: err.status,
      stack: err.stack
    }
  });
});

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
