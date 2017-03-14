// Routes
const AuthenticationRoutes = require('./authentication');

// Router
module.exports = function(app) {
  AuthenticationRoutes(app);
};
