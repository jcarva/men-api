// User Model
const User = require('../models/user');

exports.signup = function (req, res, next) {
  const {email, password} = req.body;

  if(!email || !password) {
    return res.status(422).send({error: 'Email and password must be provided.'})
  }

  User.findOne({email}, function(err, foundUser){
    if(err) { return next(err); }

    if(foundUser) {
      return res.status(422).send({error: 'This email has already been used.'})
    }

    const newUser = new User({email,password});

    newUser.save(function(err) {
      if(err) { return next(err); }

      res.status(201).json(newUser)
    })

  })
};
