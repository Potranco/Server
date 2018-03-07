import character from './character.js'
import user from './user.js'
import template from '../templates/index-html.js'

function Routers (app) {
  app.use('/', character)
  app.use('/', user)
  app.get('/', function (req, res) {
    res.status(200).send(template())
  })
}

export default Routers
