import fetch from 'isomorphic-fetch'
import saveUser from './save.js'
import config from './config.js'
import Events from '../components/events/index.js'

class User {
  constructor () {
    this.id = false
    this.name = 'Invitado'
    this.email = ''
    this.avatar = '/img/default_avatar.png'
    this.active = false
    this.url = ''
    this.password = ''
    this.isSave = false
    this.save = saveUser
    this.events = new Events()
  }

  load (id) {
    let header = {
      method: 'GET'
    }
    this.id = id || ''
    const url = config.host + this.id
    fetch(url, header)
      .then((response) => response.ok && response.json())
      .then((data) => {
        this.name = data.name
        this.active = data.active
        this.avatar = data.avatar
        this.email = data.email
        this.password = data.password
        this.url = '/user/' + data._id
        this.events.emit('onLoad', data)
      })
  }

  delete () {
    let header = {
      method: 'DELETE'
    }
    const url = config.host + this.id
    fetch(url, header)
      .then(function (response) {
        this.events.emit('onDelete', true)
      })
  }

  logout () {
    this.id = false
    this.name = 'Invitado'
    this.email = ''
    this.avatar = '/img/default_avatar.png'
    this.active = false
    this.url = ''
    this.password = ''
    this.isSave = false
    this.events.removeAll()
  }
}

export default User
