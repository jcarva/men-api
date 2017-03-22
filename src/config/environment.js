var path = require('path');
var dotEnvDevPath = path.resolve('./.env.local');
// var dotEnvProdPath = path.resolve('./.env');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: dotEnvDevPath});
} else {
  // require('dotenv').config({path: dotEnvDevPath});
  console.info('==> Production');
}
