import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MyComponent from '../components/MyComponent'

function getPage ({title, user, pageName}) {
  let app = ReactDOMServer.renderToString(<MyComponent />)
  let pageContent = `
    <h1>${title}</h1>
    <h2>Bienvenido ${user.name}</h2>
    cosillas
    ${app}
  `
  return pageContent
}

export default getPage
