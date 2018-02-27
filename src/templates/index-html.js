function template (content = {
  title: 'Project D20',
  body: '<h1>Project D20</h1>'
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${content.title}</title>
    </head>
    <body>
        ${content.body}
    </body>
    </html>
  `
}

export default template
