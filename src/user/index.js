import fetch from 'isomorphic-fetch'
import saveUser from './save.js'
import config from './config.js'

class User {
  constructor (userId = false, callBack = () => true) {
    this.id = userId
    this.name = 'Invitado'
    this.email = ''
    this.avatar = '/img/default_avatar.png'
    this.active = false
    this.url = ''
    this.password = ''
    this.save = saveUser
    this.callBack = callBack
    if (this.id) this.load()
  }

  load () {
    let header = {
      method: 'GET'
    }
    const url = config.host + this.id
    fetch(url, header)
      .then(function (response) {
        this.callBack()
      })
  }

  delete () {
    let header = {
      method: 'DELETE'
    }
    const url = config.host + this.id
    fetch(url, header)
      .then(function (response) {
        this.callBack()
      })
  }
}

export default User
