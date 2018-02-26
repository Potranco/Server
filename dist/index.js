'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/assets', _express2.default.static('dist'));

app.get('/', function (req, res) {
  var componente = 'server code';
  var html = '\n    <html>\n    <head>\n      <title>Server</title>\n    </head>\n    <body>\n      <h1>hola mundo</h1>\n      <div id="serverside">\n        ' + componente + '\n      </div>\n      <div id="app">Code client</div>\n      <script src="/assets/app.js"></script>\n    </body>\n    </html>\n  ';
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example server app listening on port 3000!');
  console.log('http://localhost:3000');
  console.log('CTRL-C to exit!');
});
