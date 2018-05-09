import React from 'react'

class BoxContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title,
      width: props.width,
      className: props.className
    }
  }

  render () {
    let {title, className} = this.state
    let classFinale = className ? 'Box ' + className : 'Box'
    return (
      <div className={classFinale} >
        { title && <h3>{title}</h3> }
        { this.props.children }
      </div>
    )
  }
}

export default BoxContent
