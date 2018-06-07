import React from 'react'
import { NavLink } from 'react-router-dom'
import ShowUser from '../ShowUser/index.js'
import Dialog from '../popup/dialog.js'

class MenuUser extends React.Component {
  render () {
    let {user, onClose} = this.props
    let userEditUrl = user.url + '/edit'
    return (
      <Dialog className='ShowUserMenu' onClose={onClose}>
        <ShowUser user={user} />
        <nav>
          <NavLink to={user.url}>Tu perfil</NavLink>
          <NavLink to={userEditUrl}>Editar perfil</NavLink>
          <NavLink to='/logout'>Cerrar sesión</NavLink>
        </nav>
      </Dialog>
    )
  }
}

export default MenuUser
