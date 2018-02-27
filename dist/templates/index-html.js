"use strict";

function template(_ref) {
  var body = _ref.body,
      title = _ref.title;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + title + "</title>\n      </head>\n      <body>\n        <h1>Server component</h1>\n        <div id=\"root\">" + body + "</div>\n        <h1>Client component</h1>\n        <div id=\"app\">" + body + "</div>\n        <script src=\"/assets/app.js\"></script>\n      </body>\n    </html>\n  ";
}

module.export = template;