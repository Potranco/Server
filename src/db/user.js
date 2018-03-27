import user from './models/user.js'

export default class User {
  find (req, res, next) {
    user.find({active: true}, function (err, users) {
      if (err) return next(err)
      res.json(users)
    })
  }

  findById (req, res, next) {
    let userId = req.params.id
    user.findById(userId, function (err, user) {
      if (err) return next(err)
      res.json(user)
    })
  }

  create (req, res, next) {
    user.create(req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  }

  update (req, res, next) {
    user.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  }

  delete (req, res, next) {
    user.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  }
}
