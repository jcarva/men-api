// Module dependencies
const jwt = require('jwt-simple');
const {jwtConfig} = require('../config/authentication');
const passport = require('passport');
require('../config/passport');

// Token generator to JWT authentication strategy
exports.tokenGenerator = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, jwtConfig.secret, 'HS512');
};

// JWT 'Authentication Middleware' intercepts incoming requests and check if exists valid local authenticated token
exports.jwtAuthentication = passport.authenticate('jwt', jwtConfig.session);

// Local 'Authentication Middleware' that verifies the received email and password to SignIn
exports.localAuthentication = passport.authenticate('local', jwtConfig.session);
