'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _indexHtml = require('../templates/index-html.js');

var _indexHtml2 = _interopRequireDefault(_indexHtml);

var _user = require('../user/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _express2.default.Router();

user.get('/user', function (req, res, next) {
  res.send('Get user loaded');
  next();
});

user.get('/user/:id', function (req, res, next) {
  var userId = req.params.id;
  var content = {
    title: 'Project D20 page user' + userId,
    user: (0, _user2.default)(userId)
  };

  res.send((0, _indexHtml2.default)(content));
  next();
});

user.post('/user/:id', function (req, res, next) {
  res.send('post user id');
});

exports.default = user;