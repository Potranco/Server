import UserModel from './models/user.js'

export default class DBMethods {
  constructor (model) {
    this.model = this.generateModel(model)
    this.find = this.find.bind(this)
    this.findById = this.findById.bind(this)
    this.update = this.update.bind(this)
    this.create = this.create.bind(this)
    this.delete = this.delete.bind(this)
  }

  generateModel (model) {
    switch (model) {
      case 'user': return UserModel
    }
    return false
  }

  find (req, res, next) {
    this.model.find({active: true}, function (err, users) {
      if (err) return next(err)
      res.json(users)
    })
  }

  findById (req, res, next) {
    let userId = req.params.id
    this.model.findById(userId, function (err, user) {
      if (err) return next(err)
      res.json(user)
    })
  }

  create (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'Body can not be empty'
      })
    }
    this.model.create(req.body, function (err, post) {
      if (err) return next(err)
      return res.json(post)
    })
  }

  update (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'Body can not be empty'
      })
    }
    this.model.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      return res.json(post)
    })
  }

  delete (req, res, next) {
    this.model.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  }
}
