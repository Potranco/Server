'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var router = _express2.default.Router();

app.use('/assets', _express2.default.static('dist'));
app.get('/', function (req, res) {
  var componente = 'server code';
  var html = '\n    <html>\n    <head>\n      <title>Server</title>\n    </head>\n    <body>\n      <h1>hola mundo</h1>\n      <div id="serverside">\n        ' + componente + '\n      </div>\n      <div id="app">Code client</div>\n      <script src="/assets/app.js"></script>\n    </body>\n    </html>\n  ';
  res.send(html);
});

router.get('/', function (req, res, next) {
  res.send('peticion con router.get');
  next();
});

router.get('/about', function (req, res, next) {
  res.send('Peticon /about con router.get');
});

app.use('/', router);

app.listen(port, function () {
  console.log('Example server app listening on port 3000!');
  console.log('http://localhost:3000');
  console.log('CTRL-C to exit!');
});