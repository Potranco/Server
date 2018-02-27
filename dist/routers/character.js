'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var character = _express2.default.Router();

character.get('/character', function (req, res, next) {
  res.send('Get Character');
});

character.get('/character/:id', function (req, res, next) {
  res.send('Get Character id');
});

character.post('/character', function (req, res, next) {
  res.send('post Character id');
});

exports.default = character;