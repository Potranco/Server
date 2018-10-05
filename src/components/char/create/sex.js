import React from 'react'
import {BoxContent} from '../../utils/index.js'

export default class SelectSex extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sexSelected: null,
      char: this.props.char,
      save: this.props.save,
      // TODO: load images with race select
      image: {
        male: 'https://i.pinimg.com/564x/55/3a/df/553adf14108659b44c5e67642ce9cf5b.jpg',
        female: 'https://i.pinimg.com/564x/d4/2b/75/d42b75ea40dbd373b0cd7763ff7d1430.jpg'
      }
    }

    this.handleClickSave = this.handleClickSave.bind(this)
  }

  handleClickSave (event) {
    event.preventDefault()
    let {char} = this.state
    char.sex = event.target.id
    this.state.save(char)
  }

  render () {
    return (
      <div className='SelectSex'>
        <h2>Seleccionar sexo</h2>
        <div className='ListSex'>
          <BoxContent title='Femenino' className='BoxContent Middle Sex'>
            <div className='Image'>
              <img src={this.state.image.female} alt='Femenino' id='Female' onClick={this.handleClickSave} />
            </div>
          </BoxContent>
          <BoxContent title='Masculino' className='BoxContent Middle Race'>
            <div className='Image'>
              <img src={this.state.image.male} alt='Masculino' id='Male' onClick={this.handleClickSave} />
            </div>
          </BoxContent>
        </div>
      </div>
    )
  }
}
