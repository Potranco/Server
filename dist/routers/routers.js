'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _character = require('./character.js');

var _character2 = _interopRequireDefault(_character);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

var _indexHtml = require('../templates/index-html.js');

var _indexHtml2 = _interopRequireDefault(_indexHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routers(app) {
  app.use('/', _character2.default);
  app.use('/', _user2.default);
  app.get('/', function (req, res) {
    res.send((0, _indexHtml2.default)());
  });
}

exports.default = Routers;