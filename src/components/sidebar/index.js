import React from 'react'
import ShowUser from '../ShowUser/index.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: true,
      className: 'SideBar',
      user: {
        name: 'Invitado',
        avatar: 'default',
        email: 'inviatado@project.d20',
        url: ''
      }
    }
    this.changeDisplaySideBar = this.changeDisplaySideBar.bind(this)
  }

  changeUser (user) {
    this.setState({user: user})
  }
  componentWithMount () {
    if (this.props.user) this.changeUser(this.props.user)
  }

  changeDisplaySideBar () {
    /* TODO: see change feature in app compoment to move all website */
    let {display} = this.state
    this.setState({
      display: !display,
      className: (!display) ? 'SideBar' : 'SideBar Desactive'
    })
  }

  render () {
    let {user} = this.state
    return (
      <div className={this.state.className}>
        <div className='ChangeDisplay' onClick={this.changeDisplaySideBar} />
        <ShowUser user={user} />
        <div className='Dialog ShowUserMenu'>
          <a href=''>Ajustes</a>
          <a href=''>Logout</a>
        </div>
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
