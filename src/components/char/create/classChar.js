import React from 'react'
import {BoxContent} from '../../utils/index.js'
import {Popup} from '../../popup/index.js'

class ClassChar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      classSelected: null,
      save: this.props.save,
      char: this.props.char,
      // TODO: load Char classes for DDBBB
      classes: [
        {
          image: 'https://i.pinimg.com/564x/0a/d1/c4/0ad1c4f2f78c639f0291232ae9e81d83.jpg',
          title: 'Barbaro',
          description: `Vienen tanto de los gélidos yermos del norte como de las infernales junglas del sur y llevan la temeridad como su estandarte. En las zonas civilizadas se les conoce como "Bárbaros" y se les crítica por su tendencia al caos y por ser dados a cometer atrocidades. Sin embargo, han demostrado su inestimable valor como luchadores a sus aliados y su terrible poder a aquellos enemigos que los subestimaron.`,
          id: '1'
        },
        {
          image: 'https://i.pinimg.com/564x/73/e5/40/73e540b45d8cac47f4f1603faf086dc1.jpg',
          title: 'Picaro',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '11'
        },
        {
          image: 'https://i.pinimg.com/564x/9b/6d/fb/9b6dfbf3d6ddaa9149adaa74c6ca2382.jpg ',
          title: 'Monje',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '3'
        },
        {
          image: 'https://i.pinimg.com/564x/2f/c1/18/2fc118f444311a7fd0ce308b4854811e.jpg',
          title: 'Guerrero',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '2'
        },
        {
          image: 'https://i.pinimg.com/564x/a1/c8/3e/a1c83efa8a785750998e199aa82e27ac.jpg',
          title: 'Paladin',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '7'
        },
        {
          image: 'https://i.pinimg.com/564x/b2/34/8d/b2348d9b76d847abf8689c317a8afa5e.jpg',
          title: 'Druida',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '5'
        },
        {
          image: 'https://i.pinimg.com/564x/02/b6/8c/02b68c2dc35f7a1f3a7cf00dbc806c6e.jpg',
          title: 'Hechicero',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '6'
        },
        {
          image: 'https://i.pinimg.com/564x/69/2b/ff/692bffdd1514f9ed801632d5bde6b001.jpg',
          image2: 'https://i.pinimg.com/564x/3b/e6/a3/3be6a38a9cdc138db289dae4e35fb722.jpg',
          title: 'Mago',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '10'
        },
        {
          image: 'https://i.pinimg.com/564x/89/b7/7b/89b77bfe2253ead51526b637421f3082.jpg',
          image2: 'https://i.pinimg.com/564x/72/c7/fd/72c7fdbf6217bcf6231c304d13e5b15e.jpg',
          title: 'Clérico',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '8'
        },
        {
          image: 'https://i.pinimg.com/564x/6f/63/c1/6f63c1ea24ea49f7a813cbae385bfb09.jpg',
          title: 'Explorador',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '9'
        },
        {
          image: 'https://i.pinimg.com/564x/c8/fa/41/c8fa41631b7c9fffbfeae58bc80e8c0f.jpg',
          title: 'Bardo',
          description: `Los enanos son orgullosos, taciturnos y bastante inflexibles, también son conocidos por ser rencorosos y la avaricia por el oro les mueve. No les gusta los extraños y mas si no son enanos, piensan que vienen a robar sus tesoros, en especial los humanos y medianos.
Ellos prefieren la belleza a través de su habilidad, transformando la naturaleza en algo mas bello que admirar la naturaleza en si, como hacen los elfos. Por eso les encanta trabajar el metal y la piedra, siendo conocidos como grandes artesanos.
Suelen ser también muy pesimistas ante todo, esperan lo peor y lo expresan continuamente. Debido a ello siempre están preparados y reaccionan rápidamente ademas de asegurarse de que todo este en orden con las armas, la comida, rutas de escape alternativas o trampas para enemigos potenciales.
Los enanos tienden a mantener su palabra, a cualquier coste.`,
          id: '4'
        }
      ]
    }

    this.handleClickClass = this.handleClickClass.bind(this)
    this.createDialogClass = this.createDialogClass.bind(this)
    this.closeDialogClass = this.closeDialogClass.bind(this)
    this.handleClickSave = this.handleClickSave.bind(this)
  }

  handleClickClass (event) {
    event.preventDefault()
    this.setState({classSelected: event.target.id})
  }

  handleClickSave () {
    let {char, classSelected} = this.state
    char.class = classSelected
    this.state.save(char)
  }

  createDialogClass (classCharId) {
    let classChar = this.state.classes.find((classChar) => classChar.id === classCharId)
    let imageBackgroundCSS = {backgroundImage: 'url(' + classChar.image + ')'}
    return (
      <Popup className='RaceSelected' title={classChar.title}
        onClose={this.closeDialogClass} background={imageBackgroundCSS}>
        <p className='Description'>{classChar.description}</p>
        <p align='center'>
          <button type='button' onClick={this.handleClickSave}>Seleccionar raza</button>
        </p>
      </Popup>
    )
  }

  closeDialogClass () {
    this.setState({classSelected: null})
  }

  listRaces () {
    return this.state.classes.map((classChar, index) => {
      return (
        <BoxContent key={index} title={classChar.title} className='BoxContent one-fourth ClassChar'>
          <div className='Image'>
            <img src={classChar.image} alt={classChar.title} id={classChar.id} onClick={this.handleClickClass} />
          </div>
        </BoxContent>
      )
    })
  }

  render () {
    return (
      <div className='SelectClassChar'>
        <h2>Seleccionar clase</h2>
        <div className='ListClassChar'>
          {this.listRaces()}
        </div>
        { this.state.classSelected && this.createDialogClass(this.state.classSelected) }
      </div>
    )
  }
}

export default ClassChar
