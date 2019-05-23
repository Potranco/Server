import fetch from 'isomorphic-fetch'
import config from './config.js'
// TODO: add save in localStorage
const save = function () {
  // this is class User
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
    headers: config.headerSave,
    body: JSON.stringify(data)
  }
  const url = this.id ? config.host + this.id : config.host
  header.method = this.id ? 'PUT' : 'POST'

  return fetch(url, header)
    .then((response) => response.ok && response.json())
    .then((data) => {
      if (!data) return false
      this.id = data._id
      this.name = data.name
      this.email = data.email
      this.active = data.active
      this.avatar = data.avatar
      this.url = config.directory + data._id
      this.callBack()
      return true
    })
    .catch((error) => {
      console.error('User.save error: ', error)
      return false
    })
}

export default save
