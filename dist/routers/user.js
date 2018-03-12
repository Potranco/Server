'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _indexHtml = require('../templates/index-html.js');

var _indexHtml2 = _interopRequireDefault(_indexHtml);

var _User = require('../user/User.js');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/user', function (req, res, next) {
  res.send((0, _indexHtml2.default)());
  next();
});

router.get('/user/:id', function (req, res, next) {
  var userId = req.params.id;
  var user = new _User2.default(userId, function () {
    console.log('newUser.getUser.setUser.success');
    var content = {
      title: 'Project D20 page user' + user.get().name,
      user: user.get()
    };
    res.send((0, _indexHtml2.default)(content));
    next();
  });
});

router.post('/user/:id', function (req, res, next) {
  var userId = req.params.id;
  var user = new _User2.default(userId, function () {
    user.save();
    var content = {
      title: 'Project D20 user Post' + user.get().name,
      user: user.get()
    };
    res.send((0, _indexHtml2.default)(content));
    next();
  });
});

exports.default = router;