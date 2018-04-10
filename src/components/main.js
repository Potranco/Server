import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import isMobile from './isMobile/index.js'

let sidebar = {
  activeSideBar: !isMobile(),
  body: document.body
}

ReactDOM.hydrate(
  <BrowserRouter>
    <App sidebar={sidebar} />
  </BrowserRouter>, document.getElementById('app'))
