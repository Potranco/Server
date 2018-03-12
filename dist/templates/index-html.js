'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('./head.js');

var _head2 = _interopRequireDefault(_head);

var _getPage = require('./getPage.js');

var _getPage2 = _interopRequireDefault(_getPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: 'Project D20',
    pageName: 'home',
    user: {
      name: 'Invitado',
      id: 0
    }
  };
  var title = content.title;

  var pageContent = (0, _getPage2.default)(content);
  return '\n  <!DOCTYPE html>\n  <html>\n  ' + (0, _head2.default)(title) + '\n  ' + pageContent + '\n  </html>\n  ';
}

exports.default = template;