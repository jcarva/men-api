// Authentication Router
var authentication_router = require('express').Router();

// Local 'Middleware Authentication' helper
const {localAuthentication} = require('../helpers/authentication');

// Authentication Controller
const AuthenticationController = require('../controllers/authentication');

authentication_router
  // Authentication Routes
  .post('/signup', AuthenticationController.signUp)
  .post('/signin', localAuthentication, AuthenticationController.signIn);


module.exports = authentication_router;
