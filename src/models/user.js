const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Model Definition
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});

// Model Class Creation
const userModelClass = mongoose.model('User', userSchema);

// Export Model
module.exports = userModelClass;
