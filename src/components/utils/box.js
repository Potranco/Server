import React from 'react'

class Box extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title,
      width: props.width
    }
  }
  render () {
    let {title} = this.state
    return (
      <div className='Box'>
        { title && <h3>{title}</h3> }
        { this.props.children }
      </div>
    )
  }
}

export default Box
