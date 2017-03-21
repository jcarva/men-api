// Local 'Middleware Authentication' helper
const {localAuthentication} = require('../helpers/authentication');

// Authentication Controller
const AuthenticationController = require('../controllers/authentication');

// Authentication Routes
module.exports = function (app) {
  app.post('/auth/signup', AuthenticationController.signUp);
  app.post('/auth/signin', localAuthentication, AuthenticationController.signIn);
};
