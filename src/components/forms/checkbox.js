import React from 'React'

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value || '',
      onChange: this.props.onChange || function (value) { return value }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let { onChange } = this.state
    onChange(event.target.checked, event.target.name)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({value: nextProps.value})
  }

  render () {
    let {value, name, label} = this.props
    return (
      <div className='Checkbox'>
        <label htmlFor={name}>
          <input
            type='checkbox'
            name={name}
            checked={value}
            onChange={this.handleChange} />
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox
