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
    this.model.find({active: true}, function (err, data) {
      if (err) return next(err)
      res.json(data)
    })
  }

  findById (req, res, next) {
    let id = req.params.id
    this.model.findById(id, function (err, data) {
      if (err) return next(err)
      res.json(data)
    })
  }

  create (req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: 'Body can not be empty'
      })
    }

    this.model.create(req.body, function (err, newData) {
      if (err) return next(err)
      return res.json(newData)
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
      var updated = Object.assign(document, req.body)
      updated.save(function (err, update) {
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
