const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:auth/auth';
mongoose.connect(dbURI);

const db = mongoose.connection;

db.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

db.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

db.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  db.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
