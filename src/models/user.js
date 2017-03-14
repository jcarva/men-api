const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// User Model Definition
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});

// Before saving a model
userSchema.pre('save', function(next) {
  // Get access to the user model
  const user = this;

  // Generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err); }

    // Encrypt the password using the generated salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err); }

      // Use the encrypted password
      user.password = hash;

      // Go ahead and save the user model
      next();
    })
  })
});

// Model Class Creation
const userModelClass = mongoose.model('User', userSchema);

// Export Model
module.exports = userModelClass;
