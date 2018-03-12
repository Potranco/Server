import express from 'express'
<<<<<<< HEAD
import Routers from './routers/index.js'
=======
import routers from './routers/routers.js'
>>>>>>> e429c1ea9be7714ca19cb7f7fda78d464fbaac11

const server = express()
const port = 3000

routers(server)

server.listen(port, function () {
  console.log('Project D20 Server in http://localhost:3000')
  console.log('CTRL-C to exit!')
})

export default server
