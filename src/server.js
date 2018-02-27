import express from 'express'
import character from './routers/character.js'
import user from './routers/user.js'
import template from './templates/index-html.js'
const app = express()
const port = 3000

app.use('/assets', express.static('dist'))
app.use('/', character)
app.use('/', user)

app.get('/', function (req, res) {
  res.send(template())
})

app.listen(port, function () {
  console.log('Example server app listening on port 3000!')
  console.log('http://localhost:3000')
  console.log('CTRL-C to exit!')
})
