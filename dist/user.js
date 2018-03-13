'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../db/user.js');

var _userDefault = require('./userDefault.js');

var _userDefault2 = _interopRequireDefault(_userDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    (0, _user.getUser)(this.userId).then(function (user) {
      _this.set(user).success(function () {
        return callback();
      });
    }).catch(function () {
      // onError create new user default
      _this.set(_userDefault2.default).then(function (user) {
        return callback();
      }).catch(function (error) {
        return console.log('Not User.set: ', error);
      });
    });
  }

  _createClass(User, [{
    key: 'set',
    value: function set(_ref) {
      var _this2 = this;

      var userId = _ref.userId,
          name = _ref.name,
          email = _ref.email;

      return new Promise(function (resolve, reject) {
        _this2.userId = userId;
        _this2.name = name;
        _this2.email = email;
        resolve(_userDefault2.default);
      });
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
      var saveUserDB = new Promise(function (resolve, reject) {
        // insert or update DDBB
        resolve(true);
      });

      return {
        success: function success(value) {
          return saveUserDB.then(value);
        }
      };
    }
  }, {
    key: 'delete',
    value: function _delete() {
      return this;
    }
  }]);

  return User;
}();

exports.default = User;