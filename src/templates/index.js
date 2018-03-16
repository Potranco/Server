import head from './head.js'
import getPage from './getPage.js'
import userDefault from '../user/userDefault.js'
import app from '../components/app.js'

function template (content = {
  title: 'Project D20',
  pageName: 'home',
  user: userDefault
}) {
  const {title} = content
  const pageContent = getPage(content)
  return `
  <!DOCTYPE html>
  <html>
  ${head(title)}
  <body>
    ${pageContent}
    ${app}
  <body>
  </html>
  `
}

export default template
