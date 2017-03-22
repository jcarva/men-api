// Authentication Router
var authenticationRouter = require('express').Router();

// Local 'Middleware Authentication' helper
const {localAuthentication} = require('../helpers/authentication');

// Authentication Controller
const AuthenticationController = require('../controllers/authentication');

authenticationRouter
  // Authentication Routes
  .post('/signup', AuthenticationController.signUp)
  .post('/signin', localAuthentication, AuthenticationController.signIn);

// Export configured Authentication Router
module.exports = authenticationRouter;
