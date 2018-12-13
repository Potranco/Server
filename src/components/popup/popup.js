import React from 'react'

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      onClose: props.onClose,
      title: props.title,
      style: props.background || '#fff'
    }
  }

  render () {
    let {title, onClose, style} = this.state
    let className = this.props.className ? 'PopupContent ' + this.props.className : 'PopupContent'
    return (
      <div className='Popup'>
        <div className='PopupBackground' onClick={onClose} />
        <div className={className} style={{style}}>
          <h3>{title}</h3>
          <div className='PopupClose' onClick={onClose} />
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Popup
