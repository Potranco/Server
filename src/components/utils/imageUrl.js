import config from '../../configServer.js'

const avatar = (obj) => config.images.server.url + config.images.rules.avatar + obj.name
const avatarEdit = (obj) => config.images.server.url + config.images.rules.avatarEdit + obj.name

export {avatar, avatarEdit}
