// JWT 'Middleware Authentication' helper
const {jwtAuthentication} = require('../helpers/authentication');

// Routes
const AuthenticationRoutes = require('./authentication');

// Router
module.exports = function (app) {
  AuthenticationRoutes(app);
  // Protected resources
  app.use('*', jwtAuthentication, function (req, res) {
    res.send({Authentication: 'Sucess'});
  });
};
