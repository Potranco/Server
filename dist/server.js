'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routers/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
var port = 3000;

server.use(_express2.default.static('public'));
(0, _index2.default)(server);

server.listen(port, function () {
  console.log('Project D20 Server in http://localhost:3000');
  console.log('CTRL-C to exit!');
});

exports.default = server;