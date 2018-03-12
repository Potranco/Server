import { getUser } from '../db/user.js'

class User {
  constructor (userId = 0, callback) {
    this.userId = userId
    this.name = 'Invitado'
    this.email = ''

    getUser(this.userId)
      .then((user) => {
        this.set(user)
          .success(() => callback())
      })
      .catch((error) => {
        console.log(error)
        // onError create new user default
        let newUser = {
          userId: 0,
          name: 'Invitado',
          email: ''
        }
        this.set(newUser)
<<<<<<< HEAD
          .success((user) => callback())
          .error((error) => console.log('Not User.set: ', error))
=======
          .success(() => callback())
          .catch((error) => console.log('Not User.set: ', error))
>>>>>>> e429c1ea9be7714ca19cb7f7fda78d464fbaac11
      })
  }

  set ({ userId, name, email }) {
    const setUser = new Promise((resolve, reject) => {
      this.userId = userId
      this.name = name
      this.email = email
<<<<<<< HEAD
      resolve()
    })

    return {
      success: setUser.resolve(),
      error: setUser.reject()
=======
      resolve(this.get())
    })

    return {
      success: (value) => setUser.then(value)
>>>>>>> e429c1ea9be7714ca19cb7f7fda78d464fbaac11
    }
  }

  get () {
    return ({
      name: this.name,
      id: this.userID,
      email: this.email
    })
  }

  save () {
    const saveUserDB = new Promise((resolve, reject) => {
      // insert or update DDBB
      resolve(true)
    })

    return {
      success: (value) => saveUserDB.then(value)
    }
  }

  delete () {
    return this
  }
}

export default User
