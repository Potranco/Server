import express from 'express'
const router = express.Router()

router.get('/character', function (req, res, next) {
  res.send('Get Character')
})

router.get('/character/:id', function (req, res, next) {
  res.send('Get Character id')
})

router.post('/character', function (req, res, next) {
  res.send('post Character id')
})

export default router
