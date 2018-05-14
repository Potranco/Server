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
    images: {
      serverTemp: './dist/public/images/temp/',
      server: './dist/public/images/',
      client: '/images/'
    }
  }
}

config.paths.host = config.url + ':' + config.port
config.paths.userApi = config.api.host + config.api.user
config.paths.imageApi = config.api.host + config.api.image

module.exports = config
