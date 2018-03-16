import userDefault from './userDefault.js'

class User {
  constructor (userId = 0, callback) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''
  }

  set (user) {
    var { userId, name, email } = user
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
