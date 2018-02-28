import { getUser } from '../db/user.js'

class User {
  constructor (userId = 0, callback) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''

    getUser(this.userId)
      .then((user) => this.set(user))
      .catch(() => {
        // onError create new user default
        let newUser = {
          userId: 0,
          name: 'Invitado',
          email: ''
        }
        this.set(newUser)
          .then(() => callback())
          .catch((error) => console.log('Not User.set: ', error))
      })
  }

  set ({ userId, name, email }) {
    return (new Promise((resolve, reject) => {
      this.userId = userId
      this.name = name
      this.email = email
      resolve(this.get())
    }))
  }

  get () {
    return ({
      name: this.name,
      id: this.userID,
      email: this.email
    })
  }

  save () {
    return this
  }

  delete () {
    return this
  }
}

export default User
