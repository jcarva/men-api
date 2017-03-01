// User Model
const User = require('../models/user');

exports.signup = function (req, res, next) {
  const {email, password} = req.body;
  res.send({sucess: 'true'});
};
