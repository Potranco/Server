import head from './head.js'
import getPage from './getPage.js'

function template (content = {
  title: 'Project D20',
  pageName: '/',
  user: 0
}) {
  const {title} = content
  const pageContent = getPage(content)
  return `
  <!DOCTYPE html>
  <html>
  ${head(title)}
  <body>
    ${pageContent}
  <body>
  </html>
  `
}

export default template
