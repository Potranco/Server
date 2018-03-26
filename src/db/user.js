import user from './models/user.js'

export default class User {
  find (req, res, next) {
    console.log('Database: get all users')
    user.find({active: true}, function (err, users) {
      if (err) return next(err)
      res.json(users)
    })
  }

  findById (req, res, next) {
    let userId = req.params.id
    console.log('Database: get user', userId)
    user.findById(userId, function (err, user) {
      if (err) return next(err)
      res.json(user)
    })
  }
}
