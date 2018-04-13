import UserModel from './models/user.js'

export default class User {
  find (req, res, next) {
    UserModel.find({active: true}, function (err, users) {
      if (err) return next(err)
      res.json(users)
    })
  }

  findById (req, res, next) {
    let userId = req.params.id
    UserModel.findById(userId, function (err, user) {
      if (err) return next(err)
      res.json(user)
    })
  }

  create (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'User can not be empty'
      })
    }
    UserModel.create(req.body, function (err, post) {
      if (err) return next(err)
      console.log('Create user ok!')
      return res.json(post)
    })
  }

  update (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'User can not be empty'
      })
    }
    UserModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      console.log('Update user ok!')
      return res.json(post)
    })
  }

  delete (req, res, next) {
    UserModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  }
}
