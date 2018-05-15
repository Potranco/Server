import cloudinary from 'cloudinary'
import config from '../configServer.js'

cloudinary.config(config.images.serverConfig)

function uploadCloud (image, callback) {
  cloudinary.uploader.upload(image, (result) =>
    callback('https://res.cloudinary.com/' + result.cloud_name + '/image/upload/c_thumb,h_150,w_150/' + result.public_id + '.' + result.format))
}

export default uploadCloud
