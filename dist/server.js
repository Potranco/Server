'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _character = require('./routers/character.js');

var _character2 = _interopRequireDefault(_character);

var _user = require('./routers/user.js');

var _user2 = _interopRequireDefault(_user);

var _indexHtml = require('./templates/index-html.js');

var _indexHtml2 = _interopRequireDefault(_indexHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use('/assets', _express2.default.static('dist'));
app.use('/', _character2.default);
app.use('/', _user2.default);

app.get('/', function (req, res) {
  res.send((0, _indexHtml2.default)());
});

app.listen(port, function () {
  console.log('Example server app listening on port 3000!');
  console.log('http://localhost:3000');
  console.log('CTRL-C to exit!');
});