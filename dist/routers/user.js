'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _express2.default.Router();

user.get('/user', function (req, res, next) {
  res.send('Get user loaded');
});

user.get('/user/:id', function (req, res, next) {
  res.send('Get user id');
});

user.post('/user/:id', function (req, res, next) {
  res.send('post user id');
});

exports.default = user;