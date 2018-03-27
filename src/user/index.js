import fetch from 'isomorphic-fetch'
const userConfig = {
  host: 'http://localhost:3000/api/user/'
}

class User {
  constructor (userId = '') {
    this.id = userId
    this.name = 'Invitado'
    this.email = ''
    this.image = ''
    this.load()
  }

  load () {
    let header = {
      method: 'GET'
    }
    const url = userConfig.host + this.id
    fetch(url, header)
      .then(function (response) {
        console.log(response)
      })
  }

  save () {
    let header = {
      method: 'POST'
    }
    const url = this.id ? userConfig.host + this.id : userConfig.host
    fetch(url, header)
      .then(function (response) {
        console.log(response)
      })
  }

  delete () {
    let header = {
      method: 'DELETE'
    }
    const url = userConfig.host + this.id
    fetch(url, header)
      .then(function (response) {
        console.log(response)
      })
  }
}

export default User
