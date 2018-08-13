import express from 'express'
import User from '../db/user.js'
import Race from '../db/race.js'
import multer from 'multer'
import config from '../configServer.js'
import {uploadImage} from './uploadFiles.js'

var upload = multer({dest: config.paths.images.serverTemp})

const router = express.Router()
const user = new User('user')
const race = new Race()

/* User */
router.get('/user', user.find)
router.get('/user/:id', user.findById)
router.post('/user/', user.create)
router.put('/user/:id', user.update)
router.delete('/user/:id', user.delete)

/* Races */
router.get('/races', race.find)
router.post('/race/', race.create)
router.put('/race/:id', race.update)
router.delete('/race/:id', race.delete)

/* Upload files */
router.post('/image', upload.single('image'), uploadImage)

export default router
