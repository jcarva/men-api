// Controllers
const Authentication = require('./controllers/authentication');

// Routes
module.exports = function (app) {
  // Authentication
  app.post('/signup', Authentication.signup);
};
