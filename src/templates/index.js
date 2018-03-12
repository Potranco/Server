import head from './head.js'
import getPage from './getPage.js'

function template (content = {
  title: 'Project D20',
  pageName: 'home',
  user: {
    name: 'Invitado',
    id: 0
  }
}) {
  const {title} = content
  const pageContent = getPage(content)
  return `
  <!DOCTYPE html>
  <html>
  ${head(title)}
  ${pageContent}
  </html>
  `
}

export default template
