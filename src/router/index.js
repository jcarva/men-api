// JWT 'Middleware Authentication' helper
const {jwtAuthentication} = require('../helpers/authentication');

// Routes
const AuthenticationRoutes = require('./authentication');

// Router
module.exports = function (app) {
  app.use('/api/auth', AuthenticationRoutes);
  // Protected resources
  app.use('*', jwtAuthentication, function (req, res) {
    res.send({Authentication: 'Sucess'});
  });
};
