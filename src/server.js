import express from 'express'
import routers from './routers/routers.js'

const server = express()
const port = 3000

routers(server)

server.listen(port, function () {
  console.log('Project D20 Server in http://localhost:3000')
  console.log('CTRL-C to exit!')
})

export default server
