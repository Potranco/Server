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
    this.active = true
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
    let data = {
      name: this.name,
      email: this.email,
      avatar: this.avatar,
      active: this.active
    }
    if (this.id) data._id = this.id
    let header = {
      method: '',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const url = this.id ? userConfig.host + this.id : userConfig.host
    header.method = this.id ? 'PUT' : 'POST'
    return fetch(url, header)
      .then(function (response) {
        return response.ok && response.json()
      })
      .then(function (data) {
        if (!data) return false
        this.id = data._id
        this.name = data.name
        this.email = data.email
        this.active = data.active
        return true
      }.bind(this))
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
