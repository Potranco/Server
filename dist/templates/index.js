'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('./head.js');

var _head2 = _interopRequireDefault(_head);

var _getPage = require('./getPage.js');

var _getPage2 = _interopRequireDefault(_getPage);

var _userDefault = require('../user/userDefault.js');

var _userDefault2 = _interopRequireDefault(_userDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: 'Project D20',
    pageName: 'home',
    user: _userDefault2.default
  };
  var title = content.title;

  var pageContent = (0, _getPage2.default)(content);
  return '\n  <!DOCTYPE html>\n  <html>\n  ' + (0, _head2.default)(title) + '\n  <body>\n  <div id="app"></div>\n  <script src=\'app.js\'></script>\n    ' + pageContent + '\n  <body>\n  </html>\n  ';
}

exports.default = template;