import express from 'express'
import Routers from './routers/index.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dbConfig from './db/config.js'

const server = express()
const port = 3000
const dbUrl = dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.dbName

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(express.static('./dist/public'))

Routers(server)

mongoose.connect(dbUrl, function (error, res) {
  if (error) {
    console.log('ERROR: connecting to Databae projectD20.')
    console.log(error)
  }

  server.listen(port, function () {
    console.log('Project D20 Server in http://localhost:3000')
    console.log('CTRL-C to exit!')
  })
})

export default server
