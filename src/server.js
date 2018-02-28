import express from 'express'
import character from './routers/character.js'
import user from './routers/user.js'
import template from './templates/index-html.js'

import userDefault from './user/userDefault.js'

const app = express()
const port = 3000

app.use('/assets', express.static('dist'))
app.use('/', character)
app.use('/', user)

app.get('/', function (req, res) {
  let content = {
    title: 'Project D20',
    user: userDefault
  }
  res.send(template(content))
})

app.listen(port, function () {
  console.log('Project D20 Server in http://localhost:3000')
  console.log('CTRL-C to exit!')
})
