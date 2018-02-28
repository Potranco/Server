import character from './character.js'
import user from './user.js'
import template from '../templates/index-html.js'
import userDefault from '../user/userDefault.js'

function Routers (app) {
  app.use('/', character)
  app.use('/', user)

  app.get('/', function (req, res) {
    let content = {
      title: 'Project D20',
      user: userDefault
    }
    res.send(template(content))
  })
}

export default Routers
