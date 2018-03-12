import { getUser } from '../db/user.js'
import userDefault from './userDefault.js'

class User {
  constructor (userId = 0, callback) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''

    getUser(this.userId)
      .then((user) => {
        this.set(user)
          .success(() => callback())
      })
      .catch(() => {
        // onError create new user default
        this.set(userDefault)
          .then((user) => callback())
          .catch((error) => console.log('Not User.set: ', error))
      })
  }

  set ({ userId, name, email }) {
    return new Promise((resolve, reject) => {
      this.userId = userId
      this.name = name
      this.email = email
      resolve(userDefault)
    })
  }

  get () {
    return ({
      name: this.name,
      id: this.userID,
      email: this.email
    })
  }

  save () {
    const saveUserDB = new Promise((resolve, reject) => {
      // insert or update DDBB
      resolve(true)
    })

    return {
      success: (value) => saveUserDB.then(value)
    }
  }

  delete () {
    return this
  }
}

export default User
