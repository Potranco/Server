import React from 'react'

class Simple extends React.Component {
  render () {
    return (
      <div className='Header'>
        { this.props.children }
      </div>
    )
  }
}

export default Simple
