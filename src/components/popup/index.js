import React from 'react'

class Popup extends React.Component {
  render () {
    return (
      <div className='Popup'>
        <div className='PopupBackground' />
        <div className='PopupContent'>
          <h3>{this.props.title}</h3>
          <div className='PopupClose' onClick={this.props.onClose} />
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Popup
