// Module dependencies
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// User Model
const User = require('../models/user');

// JWT configuration
const {jwtConfig} = require('../config/authentication');

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwtConfig.secret
};

// JWT Strategy
const jwtSignIn = new JwtStrategy(jwtOptions, function (payload, done) {
  // Check if the user_id extracted from the payload exists in the DB
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Setup options for local Strategy
const localOptions = {usernameField: 'email'};

// Local Strategy
const localSignIn = new LocalStrategy(localOptions, function (email, password, done) {
  // Check if the received email and password exist in the DB
  User.findOne({email}, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }

    user.verifyPassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        return done(null, false);
      }
      // The 'done' callback function passes the user to the 'req' object.
      return done(null, user);
    });
  });
});

// Use JWT Strategy in the Passport
passport.use(jwtSignIn);

// Use Local Strategy in the Passport
passport.use(localSignIn);

// Export configured Passport
module.exports = passport;
