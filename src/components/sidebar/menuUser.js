import React from 'react'
import { withRouter } from 'react-router-dom'
import ShowUser from '../ShowUser/index.js'
import Dialog from '../popup/dialog.js'

class MenuUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      onClose: props.onClose || function () {}
    }
    this.logout = this.logout.bind(this)
    this.goToUserProfile = this.goToUserProfile.bind(this)
    this.goToEditUser = this.goToEditUser.bind(this)
  }

  logout () {
    let {user, onClose} = this.state
    let localStorage = window.localStorage
    user.logout()
    if (localStorage && localStorage.getItem('userId')) {
      localStorage.removeItem('userId')
    }
    onClose()
  }

  goToUserProfile () {
    let {user, onClose} = this.state
    let {history} = this.props
    history.push(user.url)
    onClose()
  }

  goToEditUser () {
    let {user, onClose} = this.state
    let {history} = this.props
    history.push(user.url + '/edit')
    onClose()
  }

  render () {
    let {user, onClose} = this.state
    return (
      <Dialog className='ShowUserMenu' onClose={onClose}>
        <ShowUser user={user} />
        <ul>
          <li onClick={this.goToUserProfile}>Tu perfil</li>
          <li onClick={this.goToEditUser}>Editar perfil</li>
          <li>Personajes</li>
          <li>Campañas</li>
          <li onClick={this.logout}>Cerrar sesión</li>
        </ul>
      </Dialog>
    )
  }
}

export default withRouter(MenuUser)
