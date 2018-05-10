/* This class is not functional need a model, this content is generic functions */
/* Comment dedicated to Eric ;) */

export default class DBMethods {
  constructor () {
    this.model = false
    this.find = this.find.bind(this)
    this.findById = this.findById.bind(this)
    this.update = this.update.bind(this)
    this.create = this.create.bind(this)
    this.delete = this.delete.bind(this)
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

    this.model.create(req.body, function (err, newUser) {
      if (err) return next(err)
      return res.json(newUser)
    })
  }

  update (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'Body can not be empty'
      })
    }
    this.model.findById(req.params.id, function (err, document) {
      if (err) return next(err)
      document.set(req.body)
      document.save(function (err, update) {
        if (err) return next(err)
        return res.json(update)
      })
    })
  }

  delete (req, res, next) {
    this.model.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  }
}
