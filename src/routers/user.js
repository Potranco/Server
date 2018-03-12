import express from 'express'
import template from '../templates/index-html.js'
import User from '../user/User.js'

const user = express.Router()

user.get('/user', function (req, res, next) {
  res.send('Get user loaded')
  next()
})

user.get('/user/:id', function (req, res, next) {
  let userId = req.params.id
  let user = new User(userId, () => {
    console.log('newUser.getUser.setUser.success')
    let content = {
      title: 'Project D20 page user' + user.get().name,
      user: user.get()
    }
    res.send(template(content))
    next()
  })
})

user.post('/user/:id', function (req, res, next) {
  let userId = req.params.id
  let user = new User(userId, () => {
    user.save()
    res.send('post user id')
    next()
  })
})

export default user
