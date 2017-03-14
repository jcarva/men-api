// Authentication Controller
const AuthenticationController = require('../controllers/authentication');

// Authentication Routes
module.exports = function(app) {
  app.post('/auth/signup', AuthenticationController.signup);
};
