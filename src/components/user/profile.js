import React from 'react'

class UserProfile extends React.Component {
  render () {
    let { email, password, avatar, name, active } = this.props.user
    return (
      <div className='UserProfile'>
        User {email} {password} {avatar} {name} {active}
      </div>
    )
  }
}

export default UserProfile
