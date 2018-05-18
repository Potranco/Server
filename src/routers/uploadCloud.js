import cloudinary from 'cloudinary'
import config from '../configServer.js'

cloudinary.config(config.images.serverConfig)

function uploadCloud (image, callback) {
  cloudinary.uploader.upload(image, (result) => {
    let image = {
      id: result.public_id,
      format: result.format,
      url: result.url,
      name: result.public_id + '.' + result.format
    }
    callback(image)
  })
}

export default uploadCloud
