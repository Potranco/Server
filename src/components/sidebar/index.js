import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import ShowUser from '../ShowUser/index.js'
import Login from '../login/index.js'
import MenuUser from './menuUser.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: props.body,
      activeSideBar: props.activeSideBar,
      isLoginActive: false,
      showMenuUser: false
    }
    this.activelogin = this.activeLogin.bind(this)
    this.goToUser = this.goToUser.bind(this)
    this.isNewUser = this.isNewUser.bind(this)
    this.changedisplay = this.changedisplay.bind(this)
    this.activeEditUser = this.activeEditUser.bind(this)
    this.changeMenuDisplay = this.changeMenuDisplay.bind(this)
  }

  changedisplay () {
    let {body} = this.state
    body.classList.toggle('ActiveSideBar')
  }

  goToUser () {
    let {user} = this.props
    if (this.isNewUser() && user.id) this.activeEditUser()
    else this.activelogin()
  }

  activeEditUser () {
    let {user, history} = this.props
    history.push(user.url)
  }

  activeLogin () {
    this.setState({isLoginActive: !this.state.isLoginActive})
  }

  isNewUser () {
    let {user} = this.props
    return !user.active
  }

  componentWillMount () {
    let {activeSideBar, body} = this.state
    if (body && !activeSideBar) body.classList.remove('ActiveSideBar')
  }

  changeMenuDisplay () {
    this.setState({
      showMenuUser: !this.state.showMenuUser
    })
  }

  render () {
    let {isLoginActive, showMenuUser} = this.state
    let {user} = this.props
    return (
      <div className='SideBar'>
        <a className='ChangeDisplay' onClick={this.changedisplay} />
        <ShowUser user={user} changeMenuDisplay={this.changeMenuDisplay} />
        { !user.id && !user.active && <button onClick={this.goToUser}>Registrarse</button> }
        <ul className='MenuApp'>
          <li><NavLink to='/chars'>Personajes</NavLink></li>
          <li><NavLink to='/campaigns'>Campañas</NavLink></li>
          <li><NavLink to='/users'>Usuarios</NavLink></li>
          <li><NavLink to=''>Biblioteca</NavLink></li>
        </ul>
        {isLoginActive && <Login user={user} onLogin={this.activeLogin.bind(this)} onClose={this.goToUser} />}
        {showMenuUser && <MenuUser user={user} onClose={this.changeMenuDisplay} />}
      </div>
    )
  }
}

export default withRouter(SideBar)
