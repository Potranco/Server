const config = {
  port: 3000,
  url: 'http://localhost',
  api: {
    host: '/api',
    user: '/user',
    image: '/image'
  },
  paths: {
    host: '',
    userApi: '',
    urlTempImages: './public/images/temp',
    urlFinalImages: './public/images/'
  }
}

config.paths.host = config.url + ':' + config.port
config.paths.userApi = config.api.host + config.api.user
config.paths.imageApi = config.api.host + config.api.image

module.exports = config
