import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowUser = (props) => {
  let {name, avatar, email, url} = props.user
  return (
    <div className='CurrentUser ShowUser'>
      <NavLink to={url}><div className='Avatar' style={{backgroundImage: `url(${avatar})`}} /></NavLink>
      <p>
        <NavLink to={url}>{name}</NavLink>
        <span>{email}</span>
      </p>
    </div>
  )
}

export default ShowUser
