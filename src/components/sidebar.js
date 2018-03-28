import React from 'react'

class SideBar extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='SideBar'>
        <div className='CloseSideBar' />
        <div className='OpenSideBar' />
        <div className='ShowUser'>
          <div className='Avatar' />
          <a href=''><img /></a>
        </div>
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
