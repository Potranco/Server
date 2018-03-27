import api from './api.js'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StaticRouter from 'react-router/StaticRouter'
import App from '../components/App.js'
import template from '../templates/index.js'

function routers (app) {
  app.use('/api/', api)
  app.get('*', function (req, res) {
    const context = {}
    const AppServerRender = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    )

    if (context.url) {
      res.writeHead(301, {Location: context.url})
    } else {
      const html = template(AppServerRender)
      res.send(html)
    }
  })
}

export default routers
