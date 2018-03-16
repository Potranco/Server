import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MyComponent from './MyComponent'

export default ReactDOMServer.renderToString(<MyComponent />)
