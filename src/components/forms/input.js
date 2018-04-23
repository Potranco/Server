import React from 'React'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value || '',
      required: props.required || false,
      validate: props.validate || false,
      idValid: false,
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }

  handleChange (event) {
    let { onChange } = this.props
    this.setState({value: event.target.value})
    onChange(event.target.value)
  }

  handleOnBlur (event) {
    if (event.target.validity.typeMismatch) {
      this.setState({error: true})
    } else {
      this.setState({error: false})
    }
  }

  render () {
    let {type, name, label, placeholder} = this.props

    return (
      <div className={this.state.error ? 'InputError' : ''}>
        { label && <label htmlFor={name}>{label}</label> }
        <input
          type={type}
          name={name}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
          required={this.state.required}
          onBlur={this.handleOnBlur} />
      </div>
    )
  }
}

export default Input
