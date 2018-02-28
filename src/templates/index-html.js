import head from './head.js'
import home from './home.js'

function template (content = {
  title: 'Project D20',
  user: {
    name: 'Invitado',
    id: 0
  }
}) {
  const {title, user} = content
  return `
  <!DOCTYPE html>
  <html>
  ${head(title)}
  ${home(title, user)}
  </html>
  `
}

export default template
