import express from 'express'
import template from '../templates/index-html.js'
import User from '../user/User.js'

const router = express.Router()

router.get('/user', function (req, res, next) {
  res.send(template())
  next()
})

router.get('/user/:id', function (req, res, next) {
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

router.post('/user/:id', function (req, res, next) {
  let userId = req.params.id
  let user = new User(userId, () => {
    user.save()
    let content = {
      title: 'Project D20 user Post' + user.get().name,
      user: user.get()
    }
    res.send(template(content))
    next()
  })
})

export default router
