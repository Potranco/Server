import express from 'express'
import User from '../db/user.js'
import multer from 'multer'
import config from '../configServer.js'
import {uploadImage} from './uploadFiles.js'

var upload = multer({dest: config.paths.images.serverTemp})

const router = express.Router()
const user = new User('user')

router.get('/user', user.find)
router.get('/user/:id', user.findById)
router.post('/user/', user.create)
router.put('/user/:id', user.update)
router.delete('/user/:id', user.delete)

/* Upload files */
router.post('/image', upload.single('image'), uploadImage)

export default router
