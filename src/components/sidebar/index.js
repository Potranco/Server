import React from 'react'
import ShowUser from '../ShowUser/index.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user,
      display: props.display
    }
  }

  changeUser (user) {
    this.setState({user: user})
  }
  changedisplay () {
    let {display} = this.state
    display.body.classList.toggle('ActiveSideBar')
  }

  componentWillMount () {
    let {display} = this.state
    if (display && !display.activeSideBar && display.body) display.body.classList.remove('ActiveSideBar')
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
