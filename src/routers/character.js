import express from 'express'
const character = express.Router()

character.get('/character', function (req, res, next) {
  res.send('Character id: ')
})

export character
