import express from 'express'
const user = express.Router()

user.get('/user', function (req, res, next) {
  res.send('Get user loaded')
})

user.get('/user/:id', function (req, res, next) {
  res.send('Get user id')
})

user.post('/user/:id', function (req, res, next) {
  res.send('post user id')
})

export default user
