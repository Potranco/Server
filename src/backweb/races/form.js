import React from 'react'
import fetch from 'isomorphic-fetch'
import {BoxContent} from '../../components/utils/index.js'
import {Input, Checkbox} from '../../components/forms/index.js'
import DefaultRace from './defaultRace.js'

class NewRace extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      race: this.props.race || DefaultRace
    }

    this.handleChangeText = this.handleChangeText.bind(this)
    this.saveRace = this.saveRace.bind(this)
  }

  handleChangeText (value, key) {
    let {race} = this.state
    race[key] = value
    this.setState({race: race})
  }

  saveRace () {
    let {race} = this.state
    let header = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(race)
    }
    const url = 'http://localhost:3000/api/race/'
    fetch(url, header)
      .then((response) => response.ok && response.json())
      .then((data) => {
        console.log('response', data)
      })
  }

  render () {
    // let {race} = this.state
    return (
      <BoxContent title='Nueva Raza' className='BoxContent Middle'>
        <button onClick={this.saveRace} >Crear</button>
        <b>Raza</b>
        <br />
        {JSON.stringify(DefaultRace, null, 2)}
        {/*
        <Checkbox label='activa' name='active' value={race.active} onChange={this.handleChangeText} />
        <Input type='text' required label='nombre' name='name' value={race.name} onChange={this.handleChangeText} />
        <Input type='text' required label='imagen' name='image' value={race.image} onChange={this.handleChangeText} />
        <Input type='text' required label='descripción' name='description' value={race.description} onChange={this.handleChangeText} />
        <Input type='text' required label='clase predilecta (array)' name='favotiteClasses' value={race.favotiteClasses} onChange={this.handleChangeText} />
        <Input type='text' required label='tamaño' name='size' value={race.size} onChange={this.handleChangeText} />
        <Input type='text' required label='velocidad' name='velocity' value={race.velocity} onChange={this.handleChangeText} />
        <Input type='text' required label='lenguages array' name='languages' value={race.languages} onChange={this.handleChangeText} />
        <Input type='text' required label='ajuste de nivel' name='levelAjustment' value={race.levelAjustment} onChange={this.handleChangeText} />
        <Input type='text' required label='ajuste de nivel' name='levelAjustment' value={race.levelAjustment} onChange={this.handleChangeText} />
        <b>alineamiento</b>
        <ul>
          <li>Ver como lo hacemos</li>
        </ul>
        <b>visión</b>
        <b>statistics</b>
        <b>salvation</b>
        <b>dotes</b>
        <b>attack</b>
        <b>abilities</b>
        <b>spells</b>
        <b>others</b>
        */}
      </BoxContent>
    )
  }
}

export default NewRace
