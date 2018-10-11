import React from 'react'
import {BoxContent} from '../../utils/index.js'
import {Popup} from '../../popup/index.js'

class SelectRace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      raceSelected: null,
      save: this.props.save,
      char: this.props.char,
      // TODO: load races for DDBBB
      races: [
        {
          image: 'https://i.pinimg.com/564x/6a/81/a1/6a81a19473eef49e82f5a79106a1b27c.jpg',
          title: 'Enano',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '1',
          favoriteClasses: ['Guerrero'],
          size: 'mediano',
          velocity: 30,
          modificators: {
            salvation: {
              magic: 2,
              poison: 2
            },
            attack: [
              {'kobold': 1},
              {'goblin': 1}
            ],
            dotes: {
              'Usar objeto mágico': -2,
              'Visión-oscuridad': {
                distance: 20,
                type: 'monocromática'
              }
            },
            abilities: [
              {mineria: 1},
              {'detectar trampas': 2},
              {'orientacion': 2}
            ]
          }
        },
        {
          image: 'https://i.pinimg.com/564x/ce/4d/78/ce4d7823a98b31df7cae66b9d5805992.jpg',
          title: 'Humano',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '2'
        },
        {
          image: 'https://i.pinimg.com/564x/10/86/03/108603f052f4894219a7dbfcb3f77d03.jpg',
          title: 'Elfo',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '3'
        },
        {
          image: 'https://i.pinimg.com/564x/cb/7d/83/cb7d83749cd5e0e24513c65f280179e6.jpg',
          title: 'Semiorco',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '4'
        },
        {
          image: 'https://i.pinimg.com/564x/1d/97/d8/1d97d848ac3c791b241163163edfe3ff.jpg',
          title: 'Drow',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '5'
        },
        {
          image: 'https://i.pinimg.com/564x/0f/da/25/0fda250c157ba3d3b14d0bb0580257f6.jpg',
          title: 'Semielfo',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '6'
        },
        {
          image: 'https://i.pinimg.com/564x/90/8b/94/908b94f340d254da6dfa8405bcef8c38.jpg',
          title: 'Gnomo',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '7'
        },
        {
          image: 'https://i.pinimg.com/564x/05/9b/59/059b59dfacc35a66c05fac13146be8f6.jpg',
          title: 'Halfing',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '8'
        }
      ]
    }

    this.handleClickRace = this.handleClickRace.bind(this)
    this.createDialogRace = this.createDialogRace.bind(this)
    this.closeDialogRace = this.closeDialogRace.bind(this)
    this.handleClickSave = this.handleClickSave.bind(this)
  }

  handleClickRace (event) {
    event.preventDefault()
    this.setState({raceSelected: event.target.id})
  }

  handleClickSave () {
    let {char, raceSelected} = this.state
    char.race = raceSelected
    this.state.save(char)
  }

  createDialogRace (raceId) {
    let race = this.state.races.find((race) => race.id === raceId)
    let imageBackgroundCSS = {backgroundImage: 'url(' + race.image + ')'}
    return (
      <Popup className='RaceSelected' title={race.title}
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
        <BoxContent key={index} title={race.title} className='BoxContent one-fourth Race'>
          <div className='Image'>
            <img src={race.image} alt={race.title} id={race.id} onClick={this.handleClickRace} />
          </div>
        </BoxContent>
      )
    })
  }

  render () {
    return (
      <div className='SelectRace'>
        <h2>Seleccionar raza</h2>
        <div className='ListRaces'>
          {this.listRaces()}
        </div>
        { this.state.raceSelected && this.createDialogRace(this.state.raceSelected) }
      </div>
    )
  }
}

export default SelectRace
