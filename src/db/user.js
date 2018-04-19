import DBMethods from './DBMethods.js'
import UserModel from './models/user.js'

export default class User extends DBMethods {
  constructor () {
    super()
    this.model = UserModel
  }

  create (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'Body can not be empty'
      })
    }
    let password = req.body.password
    this.model.find({email: req.body.email}, (err, user) => {
      if (err) return next(err)
      if (!user.length) {
        this.model.create(req.body, function (err, newUser) {
          if (err) return next(err)
          return res.json(newUser)
        })
      } else {
        if (password === user[0].password) {
          res.json(user[0])
        } else {
          res.json(false)
        }
      }
    })
  }
}
