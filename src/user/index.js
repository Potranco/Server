import fetch from 'isomorphic-fetch'
import saveUser from './save.js'
import config from './config.js'

class User {
  constructor (userId = false) {
    this.id = userId
    this.name = 'Invitado'
    this.email = ''
    this.avatar = ''
    this.active = true
    this.url = ''
    this.password = ''
    this.save = saveUser
    if (this.id) this.load()
  }

  load () {
    let header = {
      method: 'GET'
    }
    const url = config.host + this.id
    fetch(url, header)
      .then(function (response) {
        console.log(response)
      })
  }

  delete () {
    let header = {
      method: 'DELETE'
    }
    const url = config.host + this.id
    fetch(url, header)
      .then(function (response) {
        console.log(response)
      })
  }
}

export default User
