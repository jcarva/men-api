const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// DB Setup
const db = require('./config/database');

// App Setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

// Router Setup
const router = require('./router');
router(app);

// Server Setup
const port = process.env.PORT || 3030;
const server = http.createServer(app);

server.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port %s. Visit http://localhost:%s in your browser.', port, port);
  }
});
