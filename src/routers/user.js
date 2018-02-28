import express from 'express'
import template from '../templates/index-html.js'
import User from '../user/user.js'

const user = express.Router()

user.get('/user', function (req, res, next) {
  res.send('Get user loaded')
  next()
})

user.get('/user/:id', function (req, res, next) {
  let userId = req.params.id
  let content = {
    title: 'Project D20 page user' + userId,
    user: User(userId)
  }

  res.send(template(content))
  next()
})

user.post('/user/:id', function (req, res, next) {
  res.send('post user id')
})

export default user
