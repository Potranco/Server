const config = {
  host: 'http://localhost:3000/api/user/',
  default: {
    name: 'Invitado',
    image: '/img/default_avatar.png'
  },
  headerSave: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  directory: '/user/'
}

export default config
