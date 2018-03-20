import { MongoClient } from 'mongodb'
import config from './config.js'
import User from '../user/index.js'
import userDefault from '../user/userDefault.js'

class UserServer extends User {
  constructor (userId, callback) {
    super()
    this.callback = callback
  }

  loadUser () {
    this.get(this.id)
      .then((user) => {
        this.set(user)
          .then((user) => this.callback(user))
      })
      .catch(() => {
        // onError create new user default
        this.set(userDefault)
          .then((user) => this.callback(user))
      })
  }

  connect (configDB) {
    let {host, port} = configDB
    let url = host + ':' + port

    return (new Promise((resolve, reject) => {
      MongoClient.connect(url, function (error, client) {
        if (error) {
          console.log('Mongo Network Error!')
          reject(error)
        } else resolve(client)
      })
    }))
  }

  get (userId) {
    return new Promise((resolve, reject) => {
      this.connect(config)
        .then((clientDB) => {
          let DB = clientDB.db(config.dbName)
          let users = DB.collection('users')

          users.find({userId: userId}).toArray((error, user) => {
            if (error) reject(error)
            if (user.length) resolve(user)
            else reject(error)
          })
        })
        .catch(reject)
    })
  }
}

export default UserServer
