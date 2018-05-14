import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Routers from './routers/index.js'
import dbConfig from './db/config.js'
import config from './configServer.js'

const server = express()
const {url, port} = config
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
    console.log('Connect to DB', res.name, 'on', res.host + ':' + res.port)
    console.log('Project D20 Server in', url + ':' + port)
    console.log('CTRL-C to exit!')
  })
})

export default server
