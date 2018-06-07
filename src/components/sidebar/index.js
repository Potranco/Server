import React from 'react'
import { browserHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import ShowUser from '../ShowUser/index.js'
import Login from '../login/index.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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
    let user = this.props
    if (this.isNewUser() && user.id) this.activeEditUser()
    else this.activelogin()
  }

  activeEditUser () {
    let user = this.props
    browserHistory.push(user.url)
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

  render () {
    let {isLoginActive} = this.state
    let {user} = this.props
    return (
      <div className='SideBar'>
        <a className='ChangeDisplay' onClick={this.changedisplay} />
        <ShowUser user={user} />
        { !user.id && !user.active && <button onClick={this.goToUser}>Registrarse</button> }
        <ul className='MenuApp'>
          <li><NavLink to='/chars'>Personajes</NavLink></li>
          <li><NavLink to='/campaigns'>Campañas</NavLink></li>
          <li><NavLink to='/users'>Usuarios</NavLink></li>
          <li><NavLink to=''>Biblioteca</NavLink></li>
        </ul>
        { isLoginActive && <Login user={user} close={this.goToUser} /> }
      </div>
    )
  }
}

export default SideBar
