import React from 'react'

/* TODO: add active animation in CSS with render process react */

class Popup extends React.Component {
  render () {
    return (
      <div className='Popup'>
        <div className='PopupBackground' onClick={this.props.onClose} />
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
