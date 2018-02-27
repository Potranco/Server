import express from 'express'
const character = express.Router()

character.get('/character', function (req, res, next) {
  res.send('Get Character')
})

character.get('/character/:id', function (req, res, next) {
  res.send('Get Character id')
})

character.post('/character', function (req, res, next) {
  res.send('post Character id')
})

export default character
