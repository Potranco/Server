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
      idLoginActive: false
    }
    this.activelogin = this.activeLogin.bind(this)
  }

  changeUser (user) {
    this.setState({user: user})
  }

  changedisplay () {
    let {body} = this.state
    body.classList.toggle('ActiveSideBar')
  }

  goToUser () {
    let user = this.state
    if (user.id) console.log('this.displayUser()')
    else this.activelogin()
  }

  displayUser () {
    console.log('Display user active')
  }

  activeLogin () {
    this.setState({idLoginActive: !this.state.idLoginActive})
  }

  componentWillMount () {
    let {activeSideBar, body} = this.state
    if (body && !activeSideBar) body.classList.remove('ActiveSideBar')
  }

  render () {
    let {user, idLoginActive} = this.state

    return (
      <div className='SideBar'>
        <a className='ChangeDisplay' onClick={this.changedisplay.bind(this)} />
        <ShowUser user={user} />
        <div className='Dialog ShowUserMenu'>
          <a href=''>Ajustes</a>
          <a href=''>Logout</a>
        </div>
        <button onClick={this.goToUser.bind(this)}>Registrarse</button>
        <ul className='MenuApp'>
          <li><a href=''>Personajes</a></li>
          <li><a href=''>Campañas</a></li>
          <li><a href=''>Biblioteca</a></li>
        </ul>
        { idLoginActive && <Login user={user} close={this.activeLogin} /> }
      </div>
    )
  }
}

export default SideBar
