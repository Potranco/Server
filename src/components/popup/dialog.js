import React from 'react'

class Dialog extends React.Component {
  render () {
    let className = this.props.className ? 'PopupContent ' + this.props.className : 'PopupContent'
    return (
      <div className='Dialog'>
        <div className='PopupBackground' onClick={this.props.onClose} />
        <div className={className}>
          <div className='PopupClose' onClick={this.props.onClose} />
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Dialog
