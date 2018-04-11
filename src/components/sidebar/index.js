import React from 'react'
import ShowUser from '../ShowUser/index.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      body: props.body,
      activeSideBar: props.activeSideBar
    }
  }

  changeUser (user) {
    this.setState({user: user})
  }

  changedisplay () {
    let {body} = this.state
    body.classList.toggle('ActiveSideBar')
  }

  goToUser () {
    console.log('Go to user')
  }

  componentWillMount () {
    let {activeSideBar, body} = this.state
    if (body && !activeSideBar) body.classList.remove('ActiveSideBar')
  }

  render () {
    let {user} = this.state

    return (
      <div className='SideBar'>
        <div className='ChangeDisplay' onClick={this.changedisplay.bind(this)} />
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
      </div>
    )
  }
}

export default SideBar
