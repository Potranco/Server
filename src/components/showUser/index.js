import React from 'react'

const ShowUser = (props) => {
  let {name, avatar, email, url} = props.user

  return (
    <div className='ShowUser'>
      <div className='Avatar'>
        <a href={url}><img src={avatar} /></a>
      </div>
      <p>
        <a href={url}>{name}</a>
        <span>{email}</span>
      </p>
    </div>
  )
}

export default ShowUser
