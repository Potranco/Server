import express from 'express'
import User from '../db/user.js'

const router = express.Router()
const user = new User()

router.get('/user', user.find)
router.get('/user/:id', user.findById)

export default router
