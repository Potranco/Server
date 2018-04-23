import React from 'React'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value || '',
      required: props.require || false,
      validate: props.validate || false,
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.hasError = this.hasError.bind(this)
  }

  handleChange (event) {
    let { onChange } = this.props
    this.setState({value: event.target.value})
    onChange(event.target.value)
  }

  hasError () {
    let {error} = this.props
    return error && <label>label</label>
  }

  render () {
    let {type, name, label} = this.props

    return (
      <div>
        { label && <label htmlFor={name}>{label}</label> }
        <input
          type={type}
          name={name}
          value={this.state.value}
          onChange={this.handleChange}
          required={this.state.required} />
        { this.hasError() }
      </div>
    )
  }
}

export default Input
