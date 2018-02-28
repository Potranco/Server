import express from 'express'
import Routers from './routers/routers.js'

const app = express()
const port = 3000

Routers(app)

app.listen(port, function () {
  console.log('Project D20 Server in http://localhost:3000')
  console.log('CTRL-C to exit!')
})
