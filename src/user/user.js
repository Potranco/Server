import { getUser } from '../db/user.js'

class User {
  constructor (userId = 0, callback) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''
    this.callback = callback

    getUser(this.userId)
      .then((user) => this.set(user))
      .catch(() => this.set({
        userId: 0,
        name: 'Invitado',
        email: ''
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
