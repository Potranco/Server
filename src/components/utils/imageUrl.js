import config from '../../configServer.js'

const imageAvatar = (obj) => config.images.server.url + config.images.rules.avatar + obj.name

export {imageAvatar}
