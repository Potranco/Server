'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    var _this = this;

    var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var callback = arguments[1];

    _classCallCheck(this, User);

    this.userId = userId;
    this.name = 'Invitado';
    this.email = '';
    this.callback = callback;
    this.DB = {};
    this.clientDB = {};
    // export to config file
    this.configDB = {
      host: 'mongodb://localhost',
      port: '27017',
      dbName: 'projectd20'
    };

    this.getUserDDBB(this.userId).then(function (user) {
      return _this.set(user);
    }).catch(function () {
      return _this.set({
        userId: 0,
        name: 'Invitado',
        email: ''
      });
    });
  }

  _createClass(User, [{
    key: 'connectDB',
    value: function connectDB() {
      var _configDB = this.configDB,
          host = _configDB.host,
          port = _configDB.port;

      var url = host + ':' + port;

      return new Promise(function (resolve, reject) {
        _mongodb.MongoClient.connect(url, function (error, client) {
          if (error) reject(error);else resolve(client);
        });
      });
    }
  }, {
    key: 'getUserDDBB',
    value: function getUserDDBB(userId) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.connectDB().then(function (clientDB) {
          _this2.clientDB = clientDB;
          _this2.DB = clientDB.db(_this2.configDB.dbName);

          var users = _this2.DB.collection('users');
          users.find({ userId: userId }).toArray(function (error, user) {
            if (error) reject(error);
            if (user.length) resolve(user);
            reject(error);
          });
        }).catch(function (error) {
          return console.log(error);
        });
      });
    }
  }, {
    key: 'set',
    value: function set(_ref) {
      var userId = _ref.userId,
          name = _ref.name,
          email = _ref.email;

      this.userId = userId;
      this.name = name;
      this.email = email;
      console.log('user loaded');
      this.callback();
    }
  }, {
    key: 'get',
    value: function get() {
      return {
        name: this.name,
        id: this.userID,
        email: this.email
      };
    }
  }, {
    key: 'save',
    value: function save() {
      return true;
    }
  }, {
    key: 'delete',
    value: function _delete() {
      return true;
    }
  }]);

  return User;
}();

exports.default = User;