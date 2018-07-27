import React from 'react'

class SelectRace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      raceSelected: this.props.race || 0,
      races: []
    }
    this.menuRaces = this.menuRaces.bind(this)
  }

  menuRaces () {
    return this.state.races.map((race) => {
      return (
        <li>
          <div className='imgBack' style='background-image: {race.image}' />
          <span>{race.titulo}</span>
        </li>
      )
    })
  }

  render () {
    return (
      <div className='SelectRace'>
        <h2>Seleccionar raza</h2>
        <ul>
          { this.menuRaces()}
        </ul>
        <div className='RaceSelected'>
          <h3>Titulo raza</h3>
          <p>descripcion</p>
          <img src='' alt='titulo raza' />
        </div>
      </div>
    )
  }
}

export default SelectRace
