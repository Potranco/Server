import React from 'react'

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      onClose: props.onClose,
      title: props.title
    }
  }

  render () {
    let {title, onClose} = this.state
    return (
      <div className='Popup'>
        <div className='PopupBackground' onClick={onClose} />
        <div className='PopupContent'>
          <h3>{title}</h3>
          <div className='PopupClose' onClick={onClose} />
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Popup
