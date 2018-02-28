import { MongoClient } from 'mongodb'
import config from './config.js'

function connect (configDB) {
  let {host, port} = configDB
  let url = host + ':' + port

  return (new Promise((resolve, reject) => {
    MongoClient.connect(url, function (error, client) {
      if (error) reject(error)
      else resolve(client)
    })
  }))
}

function getUser (userId) {
  return (new Promise((resolve, reject) => {
    connect(config)
      .then((clientDB) => {
        let DB = clientDB.db(config.dbName)
        let users = DB.collection('users')

        users.find({userId: userId}).toArray((error, user) => {
          if (error) reject(error)
          if (user.length) resolve(user)
          else reject(error)
        })
      })
      .catch((error) => console.log(error))
  }))
}

export {getUser}
