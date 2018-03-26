import api from './api.js'
import template from '../templates/index.js'

function routers (app) {
  app.use('/api/', api)

  /* Control router web with react-router */
  app.get('/', function (req, res) {
    res.status(200).send(template())
  })
}

export default routers
