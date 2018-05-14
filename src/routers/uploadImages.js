import multer from 'multer'
import fs from 'fs'
import config from '../configServer.js'

var upload = multer({dest: config.paths.urlTempImages})

function single (req, res, next) {
  console.log('files:', req.files)
  let finalPath = config.paths.urlFinalImages + req.files[0].filename
  fs.createReadStream(config.paths.urlTempImages + req.files[0].filename)
    .pipe(fs.createWriteStream(finalPath))
  res.send('ok')
}

export default {single, upload}
