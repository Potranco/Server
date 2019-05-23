import fetch from 'isomorphic-fetch'
import saveUser from './save.js'
import config from './config.js'

class User {
  constructor (userId = false, callBack = () => true) {
    this.id = userId
    this.name = config.default.name
    this.email = ''
    this.avatar = config.default.image
    this.active = false
    this.url = ''
    this.password = ''
    this.callBack = callBack
    this.isSave = false
    this.save = saveUser
    if (this.id) this.load()
  }

  load () {
    let header = {
      method: 'GET'
    }
    const url = config.host + this.id
    fetch(url, header)
      .then((response) => response.ok && response.json())
      .then((data) => {
        this.name = data.name
        this.active = data.active
        this.avatar = data.avatar
        this.email = data.email
        this.password = data.password
        this.url = config.directory + data._id
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

  logout () {
    this.id = false
    this.name = config.default.name
    this.email = ''
    this.avatar = config.default.image
    this.active = false
    this.url = ''
    this.password = ''
    this.callBack = () => true
    this.isSave = false
  }
}

export default User
