import character from './character.js'
import user from './user.js'
import template from '../templates/index-html.js'
import User from '../user/User.js'

function Routers (app) {
  app.use('/', character)
  app.use('/', user)

  app.get('/', function (req, res) {
    let newUser = new User(0)
    let content = {
      title: 'Project D20',
      user: newUser.get()
    }
    res.send(template(content))
  })
}

export default Routers
