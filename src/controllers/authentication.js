// User Model
const User = require('../models/user');

// Token generator helper
const {tokenGenerator} = require('../helpers/authentication');

exports.signIn = function (req, res, next) {
  // Gotten user from local strategy in passport configuration
  const user = req.user;

  res.status(200).json({
    sucess: true,
    token: tokenGenerator(user),
    data: req.body
  });
};

exports.signUp = function (req, res, next) {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(422).json({
      sucess: false,
      error: 'Email and password must be provided.',
      data: req.body
    });
  }

  User.findOne({email}, function (err, user) {
    if (err) {
      return next(err);
    }

    if (user) {
      return res.status(422).json({
        sucess: false,
        error: 'This email has already been used.',
        data: req.body
      });
    }

    const newUser = new User({email, password});

    newUser.save(function (err) {
      if (err) {
        return next(err);
      }

      res.status(201).json({
        sucess: true,
        token: tokenGenerator(newUser),
        data: req.body
      });
    });
  });
};
