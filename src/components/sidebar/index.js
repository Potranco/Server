import React from 'react'
import { browserHistory } from 'react-router'
import ShowUser from '../ShowUser/index.js'
import Login from '../login/index.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      body: props.body,
      activeSideBar: props.activeSideBar,
      isLoginActive: false
    }
    this.activelogin = this.activeLogin.bind(this)
    this.goToUser = this.goToUser.bind(this)
    this.isNewUser = this.isNewUser.bind(this)
    this.changedisplay = this.changedisplay.bind(this)
    this.activeEditUser = this.activeEditUser.bind(this)
  }

  changedisplay () {
    let {body} = this.state
    body.classList.toggle('ActiveSideBar')
  }

  goToUser () {
    let user = this.state
    if (this.isNewUser() && user.id) this.activeEditUser()
    else this.activelogin()
  }

  activeEditUser () {
    let user = this.state
    browserHistory.push(user.url)
  }

  activeLogin () {
    this.setState({isLoginActive: !this.state.isLoginActive})
  }

  isNewUser () {
    let {user} = this.state
    return !user.active
  }

  componentWillMount () {
    let {activeSideBar, body} = this.state
    if (body && !activeSideBar) body.classList.remove('ActiveSideBar')
  }

  render () {
    let {user, isLoginActive} = this.state
    return (
      <div className='SideBar'>
        <a className='ChangeDisplay' onClick={this.changedisplay} />
        <ShowUser user={user} />
        <div className='Dialog ShowUserMenu'>
          <a href='/ajustes'>Ajustes</a>
          <a href='/logout'>Logout</a>
        </div>
        <button onClick={this.goToUser}>Registrarse</button>
        <ul className='MenuApp'>
          <li><a href='/chars'>Personajes</a></li>
          <li><a href='/campaigns'>Campañas</a></li>
          <li><a href='/users'>Usuarios</a></li>
          <li><a href=''>Biblioteca</a></li>
        </ul>
        { isLoginActive && <Login user={user} close={this.goToUser} /> }
      </div>
    )
  }
}

export default SideBar
