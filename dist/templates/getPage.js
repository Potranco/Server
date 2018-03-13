'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var menu = 'Menu'; // Future template Sidebar
function getPage(_ref) {
  var title = _ref.title,
      user = _ref.user,
      pageName = _ref.pageName;

  var pageContent = '\n    <h1>' + title + '</h1>\n    <h2>Bienvenido ' + user.name + '</h2>\n    ' + menu + '\n  ';
  return pageContent;
}

exports.default = getPage;