import React from 'react'

class SelectRace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      raceSelected: this.props.race || 2,
      races: [
        {
          image: 'https://i.pinimg.com/564x/97/c8/46/97c8464a38c172d1c131c58c0a039301.jpg',
          title: 'Enanos',
          description: 'Texto de descripcion de la raza',
          id: '1'
        },
        {
          image: 'https://i.pinimg.com/564x/84/ea/d2/84ead2a8987a863e987269cac141fbeb.jpg',
          title: 'Elfos',
          description: 'Texto de descripcion de la raza',
          id: '2'
        }
      ]
    }
    this.menuRaces = this.menuRaces.bind(this)
    this.handleClickRace = this.handleClickRace.bind(this)
    this.searchRace = this.searchRace.bind(this)
  }

  menuRaces () {
    let races = this.state.races.map((race) => {
      return <li key={race.id} title={race.title}>
        <img src={race.image} onClick={this.handleClickRace} id={race.id} />
      </li>
    })
    let menuRaces = <div className='MenuRaces'>
      {this.raceNavigator()}
      <ul>{races}</ul>
    </div>
    return menuRaces
  }

  raceNavigator () {
    return (
      <div className='RaceNavigator'>
        <div className='Prev' />
        <div className='Next' />
      </div>
    )
  }

  handleClickRace (event) {
    event.preventDefault()
    let raceId = event ? event.target.id : null
    this.setState({raceSelected: raceId})
  }

  searchRace (raceId) {
    return this.state.races.find((race) => race.id === raceId) || this.state.races[0]
  }

  render () {
    let race = this.searchRace(this.state.raceSelected)
    return (
      <div className='SelectRace'>
        <h2>Seleccionar raza</h2>
        <div className='Select'>
          { this.menuRaces() }
          <div className='RaceSelected'>
            <h3>{race.title}</h3>
            <p>{race.description}</p>
            <div className='Image'>
              <img src={race.image} alt={race.title} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectRace
