'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('./head.js');

var _head2 = _interopRequireDefault(_head);

var _home = require('./home.js');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: 'Project D20',
    user: {
      name: 'Invitado',
      id: 0
    }
  };
  var title = content.title,
      user = content.user;

  return '\n  <!DOCTYPE html>\n  <html>\n  ' + (0, _head2.default)(title) + '\n  ' + (0, _home2.default)(title, user) + '\n  </html>\n  ';
}

exports.default = template;