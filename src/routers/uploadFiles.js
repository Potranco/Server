import fs from 'fs'
import config from '../configServer.js'
import uploadCloud from './uploadCloud.js'

function uploadImage (req, res, next) {
  if (req.file.length < 1) return res.status(500).send('No images in request')
  let {userid} = req.body
  let finalPath = config.paths.images.server + userid + '_' + req.file.originalname
  let clientPath = config.paths.images.client + userid + '_' + req.file.originalname
  if (config.images.cloud) {
    uploadCloud(req.file.destination + req.file.filename, (url) => res.json({image: url}))
  } else {
    fs.createReadStream(req.file.destination + req.file.filename)
      .pipe(fs.createWriteStream(finalPath))
    res.json({image: clientPath})
  }
}

export {uploadImage, uploadCloud}
