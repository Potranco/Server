import React from 'react'

class MyComponent extends React.Component {
  render () {
    const version = this.props.version || 'default version'
    return (
      <div className='MyComponent'>
        <h1>React Component {version}</h1>
      </div>
    )
  }
}

export default MyComponent
