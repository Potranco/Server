import express from 'express'
import User from '../db/user.js'
import multer from 'multer'
import fs from 'fs'
import config from '../configServer.js'

var upload = multer({dest: config.paths.urlTempImages})

const router = express.Router()
const user = new User('user')

router.get('/user', user.find)
router.get('/user/:id', user.findById)
router.post('/user/', user.create)
router.put('/user/:id', user.update)
router.delete('/user/:id', user.delete)

/* Upload image */
router.post('/image', upload.array('image', 12), function (req, res, next) {
  let {userid} = req.body
  let finalPath = config.paths.urlFinalImages + userid + '_' + req.files[0].filename
  fs.createReadStream(config.paths.urlTempImages + req.files[0].filename)
    .pipe(fs.createWriteStream(finalPath))
  res.json({image: config.paths.urlFinalImages + userid + '_' + req.files[0].filename})
})

export default router
