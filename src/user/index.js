
class User {
  constructor (userId = 0) {
    this.id = userId
    this.name = 'Invitado'
    this.email = ''
    this.image = ''
  }

  set (user) {
    var { id, name, email, image } = user
    return new Promise((resolve, reject) => {
      this.id = (id !== undefined) ? id : this.id
      this.name = (name !== undefined) ? name : this.name
      this.email = (email !== undefined) ? email : this.email
      this.image = (image !== undefined) ? image : this.image
      resolve({
        name: this.name,
        id: this.id,
        email: this.email,
        image: this.image
      })
    })
  }

  get () {
    return ({
      name: this.name,
      id: this.id,
      email: this.email,
      image: this.image
    })
  }
}

export default User
