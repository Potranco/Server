import React from 'React'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value || '',
      required: props.required || false,
      validate: props.validate || false,
      idValid: false,
      error: false,
      onChange: this.props.onChange || function (value) { return value }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }

  handleChange (event) {
    let { onChange } = this.state
    onChange(event.target.value, event.target.name)
  }

  handleOnBlur (event) {
    if (event.target.validity.typeMismatch) {
      this.setState({error: true})
    } else {
      this.setState({error: false})
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({value: nextProps.value})
  }

  render () {
    let {type, value, name, label, placeholder} = this.props
    return (
      <div className={this.state.error ? 'InputError' : ''}>
        { label && <label htmlFor={name}>{label}</label> }
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleOnBlur} />
      </div>
    )
  }
}

export default Input
