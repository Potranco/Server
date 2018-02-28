
class User {
  constructor (userId = 0) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''
    this.getUserDDBB()
  }

  getUserDDBB () {
    return true
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
