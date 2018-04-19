import fetch from 'isomorphic-fetch'
import config from './config.js'

const save = function () {
  let data = {
    name: this.name,
    email: this.email,
    avatar: this.avatar,
    active: this.active,
    password: this.password
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
  const url = this.id ? config.host + this.id : config.host
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

export default save
