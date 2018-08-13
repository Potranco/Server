import React from 'react'
import { withRouter } from 'react-router-dom'

class Generic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user || ''
    }
    this.goToCreateChar = this.goToCreateChar.bind(this)
  }

  goToCreateChar () {
    let {history} = this.props
    history.push('/char/create')
  }

  render () {
    return (
      <div className='Header'>
        <h1>Personajes</h1>
        <div className='CreateRandom' onClick={this.goToCreateChar}>Nuevo personaje</div>
        <div className='CharList'>
          <ul>
            <li>
              <div className='More'>+</div>
              Más...
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Generic)
