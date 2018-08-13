import React from 'react'
import SelectRace from './race.js'

class CreateChar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: props.step || 0
    }

    this.loadStep = this.loadStep.bind(this)
  }

  loadStep (step) {
    return <SelectRace race={0} />
  }

  render () {
    return (
      <div className='Content createChar'>
        {this.loadStep(this.state.step)}
      </div>
    )
  }
}

export default CreateChar
