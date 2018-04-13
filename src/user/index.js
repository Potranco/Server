import fetch from 'isomorphic-fetch'
const userConfig = {
  host: 'http://localhost:3000/api/user/'
}

class User {
  constructor (userId = false) {
    this.id = userId
    this.name = 'Invitado'
    this.email = ''
    this.avatar = ''
    this.url = ''
    if (this.id) this.load()
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
    return fetch(url, header)
      .then(function (response) {
        if (response.ok) {
          let data = response.json()
          this.id = data.id
          this.name = data.name
          this.email = data.email
          return true
        }
        return false
      })
      .catch(function (error) {
        console.log('User.save error: ', error)
        return false
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
