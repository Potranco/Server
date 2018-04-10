import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import isMobile from './isMobile/index.js'

ReactDOM.hydrate(
  <BrowserRouter>
    <App
      activeSideBar={!isMobile()}
      body={document.body}
    />
  </BrowserRouter>, document.getElementById('app'))
