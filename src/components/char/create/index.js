import React from 'react'
import SelectRace from './race.js'
import SelectSex from './sex.js'
import ClassChar from './classChar.js'
import Char from '../../../char/index.js'

class CreateChar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: parseInt(props.step || 0),
      char: props.char || new Char()
    }

    this.loadStep = this.loadStep.bind(this)
    this.saveData = this.saveData.bind(this)
  }

  loadStep (step) {
    let response = null
    let {char} = this.state
    switch (step) {
      case 0: response = <SelectRace save={this.saveData} char={char} />
        break
      case 1: response = <SelectSex save={this.saveData} char={char} />
        break
      case 2: response = <ClassChar save={this.saveData} char={char} />
        break
      default: response = <h1>Next Step en construccion</h1>
    }
    return response
  }

  saveData (char) {
    let {step} = this.state
    let charChanged = char || this.state.char
    step++
    console.log('Char:', charChanged)
    this.setState({step: step, char: charChanged})
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
