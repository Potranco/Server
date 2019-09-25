import React from 'react'

class Chars extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chars: props.chars || []
    }
  }
  render () {
    return (
      <div className='Content CharList'>
        Listado de Personajes
      </div>
    )
  }
}

export default Chars
