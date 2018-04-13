import React from 'React'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value || ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let { onChange } = this.props
    this.setState({value: event.target.value})
    onChange(event.target.value)
  }

  render () {
    let {type, name} = this.props

    return (
      <input
        type={type}
        name={name}
        value={this.state.value}
        onChange={this.handleChange} />
    )
  }
}

export default Input
