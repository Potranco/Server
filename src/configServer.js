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
  },
  images: {
    cloud: true,
    serverConfig: {
      cloud_name: 'project-d-20',
      api_key: '822113599232928',
      api_secret: 'MjD_yUqHf6Z1IqaBmT0oAERuu00'
    }
  }
}

config.paths.host = config.url + ':' + config.port
config.paths.userApi = config.api.host + config.api.user
config.paths.imageApi = config.api.host + config.api.image

module.exports = config
