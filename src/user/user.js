import { MongoClient } from 'mongodb'

class User {
  constructor (userId = 0, callback) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''
    this.callback = callback
    this.DB = {}
    this.clientDB = {}
    // export to config file
    this.configDB = {
      host: 'mongodb://localhost',
      port: '27017',
      dbName: 'projectd20'
    }

    this.getUserDDBB(this.userId)
      .then((user) => this.set(user))
      .catch(() => this.set({
        userId: 0,
        name: 'Invitado',
        email: ''
      }))
  }

  connectDB () {
    let {host, port} = this.configDB
    let url = host + ':' + port

    return (new Promise((resolve, reject) => {
      MongoClient.connect(url, function (error, client) {
        if (error) reject(error)
        else resolve(client)
      })
    }))
  }

  getUserDDBB (userId) {
    return (new Promise((resolve, reject) => {
      this.connectDB()
        .then((clientDB) => {
          this.clientDB = clientDB
          this.DB = clientDB.db(this.configDB.dbName)

          let users = this.DB.collection('users')
          users.find({userId: userId}).toArray((error, user) => {
            if (error) reject(error)
            if (user.length) resolve(user)
            reject(error)
          })
        })
        .catch((error) => console.log(error))
    }))
  }

  set ({ userId, name, email }) {
    this.userId = userId
    this.name = name
    this.email = email
    this.callback()
  }

  get () {
    return ({
      name: this.name,
      id: this.userID,
      email: this.email
    })
  }

  save () {
    return true
  }

  delete () {
    return true
  }
}

export default User
