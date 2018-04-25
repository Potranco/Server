const config = {
  port: 3000,
  url: 'http://localhost',
  api: {
    host: '/api',
    user: '/user'
  },
  paths: {
    host: '',
    userApi: ''
  }
}

config.paths.host = config.url + ':' + config.port
config.paths.userApi = config.api.host + config.api.user

module.exports = config
