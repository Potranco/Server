import React from 'react'

export default class ShowUser extends React.Component {
  render () {
    let {name, avatar, email} = this.props.user
    return (
      <div className='CurrentUser'>
        <div className='ShowUser' onClick={this.props.changeMenuDisplay}>
          <div className='Avatar' style={{backgroundImage: `url(${avatar})`}} />
          <p>
            <strong>{name}</strong>
            <span>{email}</span>
          </p>
        </div>
      </div>
    )
  }
}
