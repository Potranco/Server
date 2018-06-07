import React from 'react'
import { NavLink } from 'react-router-dom'
import Dialog from '../popup/dialog.js'

/* TODO: change menu user, move in sidebar or new Component */
export default class ShowUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.changeMenuDisplay = this.changeMenuDisplay.bind(this)
  }

  menuUser () {
    let {url} = this.props.user
    let userEditUrl = url + '/edit'
    return <Dialog className='ShowUserMenu' onClose={this.changeMenuDisplay}>
      {this.showUserHtml()}
      <ul>
        <li><NavLink to={url}>Tu perfil</NavLink></li>
        <li><NavLink to={userEditUrl}>Editar perfil</NavLink></li>
        <li><NavLink to='/logout'>Cerrar sesión</NavLink></li>
      </ul>
    </Dialog>
  }

  changeMenuDisplay () {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  showUserHtml (action = false) {
    let {name, avatar, email} = this.props.user
    return <div className='ShowUser' onClick={action}>
      <div className='Avatar' style={{backgroundImage: `url(${avatar})`}} />
      <p>
        <strong>{name}</strong>
        <span>{email}</span>
      </p>
    </div>
  }

  render () {
    let {showMenu} = this.state
    return (
      <div className='CurrentUser'>
        {this.showUserHtml(this.changeMenuDisplay.bind(this))}
        {showMenu && this.menuUser()}
      </div>
    )
  }
}
