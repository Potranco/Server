import express from 'express'
import Routers from './routers/index.js'

const server = express()
const port = 3000

server.use(express.static('public'))
Routers(server)

server.listen(port, function () {
  console.log('Project D20 Server in http://localhost:3000')
  console.log('CTRL-C to exit!')
})

export default server
