'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = undefined;

var _mongodb = require('mongodb');

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connect(configDB) {
  var host = configDB.host,
      port = configDB.port;

  var url = host + ':' + port;

  return new Promise(function (resolve, reject) {
    _mongodb.MongoClient.connect(url, function (error, client) {
      if (error) {
        console.log('Mongo Network Error!');
        reject(error);
      } else resolve(client);
    });
  });
}

function getUser(userId) {
  return new Promise(function (resolve, reject) {
    connect(_config2.default).then(function (clientDB) {
      var DB = clientDB.db(_config2.default.dbName);
      var users = DB.collection('users');

      users.find({ userId: userId }).toArray(function (error, user) {
        if (error) reject(error);
        if (user.length) resolve(user);else reject(error);
      });
    }).catch(reject);
  });
}

exports.getUser = getUser;