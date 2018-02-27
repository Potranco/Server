'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: 'Project D20',
    body: '<h1>Project D20</h1>'
  };

  return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <title>' + content.title + '</title>\n    </head>\n    <body>\n        ' + content.body + '\n    </body>\n    </html>\n  ';
}

exports.default = template;