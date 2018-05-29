import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { isMobile } from './utils/index.js'

let localStorage = window.localStorage
let userId = null
if (localStorage && localStorage.getItem('userId')) {
  userId = localStorage.getItem('userId')
}

ReactDOM.hydrate(
  <BrowserRouter>
    <App
      userId={userId}
      activeSideBar={!isMobile()}
      body={document.body}
    />
  </BrowserRouter>, document.getElementById('app'))
