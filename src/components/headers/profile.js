import React from 'react'
import User from '../../user/index.js'
import ShowUser from '../showUser/index.js'
import { withRouter } from 'react-router-dom'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: props.userId || '',
      currentUser: props.currentUser || new User(),
      user: props.user || new User()
    }
    this.isCurrentUser = this.isCurrentUser.bind(this)
    this.goToEditUser = this.goToEditUser.bind(this)
  }

  componentDidMount () {
    let {userId} = this.state
    // TODO: search solution for warning in loadpage Profile
    let loadUser = new User(userId, () => this.setState({user: loadUser}))
  }
  isCurrentUser () {
    let {currentUser, user} = this.state
    return currentUser.id === user.id
  }
  goToEditUser () {
    let {currentUser} = this.state
    let {history} = this.props
    history.push(currentUser.url + '/edit')
  }
  render () {
    let {user} = this.state
    return (
      <div className='Header'>
        <ShowUser user={user} />
        { this.isCurrentUser() &&
          <div className='Menu'>
            <div>Perfil</div>
            <div onClick={this.goToEditUser}>Editar</div>
            <div>Personajes</div>
            <div>Campañas</div>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(Profile)
