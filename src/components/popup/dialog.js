import React from 'react'

class Dialog extends React.Component {
  render () {
    return (
      <div className='Dialog'>
        <div className='PopupBackground' onClick={this.props.onClose} />
        <div className='PopupContent'>
          <div className='PopupClose' onClick={this.props.onClose} />
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Dialog
