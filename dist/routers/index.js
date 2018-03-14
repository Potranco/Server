'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _character = require('./character.js');

var _character2 = _interopRequireDefault(_character);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

var _index = require('../templates/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routers(app) {
  app.use('/', _character2.default);
  app.use('/', _user2.default);
  app.get('/', function (req, res) {
    res.status(200).send((0, _index2.default)());
  });
}

exports.default = routers;