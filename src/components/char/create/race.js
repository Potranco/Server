import React from 'react'
import fetch from 'isomorphic-fetch'
import {BoxContent} from '../../utils/index.js'
import {Popup} from '../../popup/index.js'

class SelectRace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      raceSelected: null,
      save: this.props.save,
      load: false,
      char: this.props.char,
      races: []
    }

    this.handleClickRace = this.handleClickRace.bind(this)
    this.createDialogRace = this.createDialogRace.bind(this)
    this.closeDialogRace = this.closeDialogRace.bind(this)
    this.handleClickSave = this.handleClickSave.bind(this)
    this.addRaceChar = this.addRaceChar.bind(this)
  }

  handleClickRace (event) {
    event.preventDefault()
    this.setState({raceSelected: event.target.id})
  }

  handleClickSave () {
    let {char, raceSelected, races} = this.state
    let race = races.find((race) => race._id === raceSelected)
    char = this.addRaceChar(race, char)
    console.log('Add race in char:', char)
    this.state.save(char)
  }

  addRaceChar (race, char) {
    char.race = race._id
    char.favotiteClasses = race.favotiteClasses
    char.size = race.size
    char.velocity = race.velocity
    char.languages = char.languages.concat(race.languages)
    char.levelAjustment = race.levelAjustment
    char.alignment = race.alignment
    char.vision = char.vision.concat(race.vision)
    char.statistics.FUE.base = race.statistics.FUE
    char.statistics.CON.base = race.statistics.CON
    char.statistics.DES.base = race.statistics.DES
    char.statistics.INT.base = race.statistics.INT
    char.statistics.SAB.base = race.statistics.SAB
    char.statistics.CAR.base = race.statistics.CAR
    char.salvation.REF.base = race.salvation.REF
    char.salvation.FOR.base = race.salvation.FOR
    char.salvation.VOL.base = race.salvation.VOL
    char.salvation.type = char.salvation.type.concat(race.salvation.type)
    char.attack.mele.modRace = race.attack.mele
    char.attack.distance.modRace = race.attack.distance
    char.attack.race = char.attack.race.concat(race.attack.race)
    char.dotes.whenCreate = race.dotes.whenCreate
    char.dotes.list = char.dotes.list.concat(race.dotes.list)
    char.abilities.whenCreate = race.abilities.whenCreate
    char.abilities.list = char.abilities.list.concat(race.abilities.list)
    char.spells = char.spells.concat(race.spells)
    return char
  }

  componentDidMount () {
    if (this.state.load) return true
    let header = {
      method: 'GET'
    }
    const url = 'http://localhost:3000/api/races/'
    fetch(url, header)
      .then((response) => response.ok && response.json())
      .then((data) => {
        this.setState({
          load: true,
          races: data
        })
      })
      .catch((e) => console.log('Error call race:', e))
  }

  createDialogRace (raceId) {
    let race = this.state.races.find((race) => race._id === raceId)
    let imageBackgroundCSS = {backgroundImage: 'url(' + race.image + ')'}
    return (
      <Popup className='RaceSelected' title={race.name}
        onClose={this.closeDialogRace} background={imageBackgroundCSS}>
        <p className='Description'>{race.description}</p>
        <p align='center'>
          <button type='button' onClick={this.handleClickSave}>Seleccionar raza</button>
        </p>
      </Popup>
    )
  }

  closeDialogRace () {
    this.setState({raceSelected: null})
  }

  listRaces () {
    return this.state.races.map((race, index) => {
      return (
        <BoxContent key={index} title={race.name} className='BoxContent one-fourth Race'>
          <div className='Image'>
            <img src={race.image} alt={race.name} id={race._id} onClick={this.handleClickRace} />
          </div>
        </BoxContent>
      )
    })
  }

  render () {
    let {load, raceSelected} = this.state
    return (
      <div className='SelectRace'>
        <h2>Seleccionar raza</h2>
        <div className='ListRaces'>
          {load && this.listRaces()}
        </div>
        { raceSelected && this.createDialogRace(raceSelected) }
      </div>
    )
  }
}

export default SelectRace
