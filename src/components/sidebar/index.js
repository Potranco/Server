import React from 'react'
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
    console.log('Display user active')
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
          <a href=''>Ajustes</a>
          <a href=''>Logout</a>
        </div>
        <button onClick={this.goToUser}>Registrarse</button>
        <ul className='MenuApp'>
          <li><a href=''>Personajes</a></li>
          <li><a href=''>Campañas</a></li>
          <li><a href=''>Biblioteca</a></li>
        </ul>
        { isLoginActive && <Login user={user} close={this.goToUser} /> }
      </div>
    )
  }
}

export default SideBar
