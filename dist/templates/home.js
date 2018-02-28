'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var menu = 'Menu'; // Future template Sidebar
var home = function home(title, user) {
    return '\n<body>\n    <h1>' + title + '</h1>\n    <h2>Bienvenido ' + user.name + '</h2>\n    ' + menu + '\n</body>\n';
};

exports.default = home;