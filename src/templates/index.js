import head from './head.js'
import getPage from './getPage.js'
import userDefault from '../user/userDefault.js'

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
    <div id="app">
      ${pageContent}
    </div>
    <!-- webapp client -->
    <script src='app.js'></script>
  <body>
  </html>
  `
}

export default template
