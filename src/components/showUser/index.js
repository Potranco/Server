import React from 'react'
import { NavLink } from 'react-router-dom'

export default class ShowUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.changeMenuDisplay = this.changeMenuDisplay.bind(this)
  }

  showMenu () {
    return <div className='Dialog ShowUserMenu '>
      <NavLink to={this.props.user.url}>Editar perfil</NavLink>
      <NavLink to='/ajustes'>Ajustes</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
    </div>
  }

  changeMenuDisplay () {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render () {
    let {name, avatar, email} = this.props.user
    let {showMenu} = this.state
    return (
      <div className='CurrentUser ShowUser' onClick={this.changeMenuDisplay.bind(this)}>
        <div className='Avatar' style={{backgroundImage: `url(${avatar})`}} />
        <p>
          <strong>{name}</strong>
          <span>{email}</span>
        </p>
        {showMenu && this.showMenu()}
      </div>
    )
  }
}
