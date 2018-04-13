import express from 'express'
import DBMethods from '../db/DBMethods.js'

const router = express.Router()
const user = new DBMethods('user')

router.get('/user', user.find)
router.get('/user/:id', user.findById)
router.post('/user/', user.create)
router.put('/user/:id', user.update)
router.delete('/user/:id', user.delete)

export default router
