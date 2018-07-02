import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SideBar from './sidebar/index.js'
import User from '../user/index.js'

import Page from './page/index.js'
import EditUser from './user/edit.js'
import UserProfile from './user/profile.js'

const Chars = () => <h1>Personajes</h1>
const Campaigns = () => <h1>Campañas</h1>
const Users = () => <h1>Usuarios</h1>
const Library = () => <h1>Biblioteca</h1>

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handlerForceUpdate = this.handlerForceUpdate.bind(this)
    this.state = {
      user: (props.userId) ? new User(props.userId, this.handlerForceUpdate) : new User(null, this.handlerForceUpdate),
      activeSideBar: props.activeSideBar,
      body: props.body
    }
  }

  handlerForceUpdate () {
    this.forceUpdate()
  }

  render () {
    let {user, body, activeSideBar} = this.state
    let home = () => <Page />
    let editUser = () => <EditUser user={user} />
    let userProfile = () => <UserProfile user={user} />
    return (
      <div>
        <SideBar
          activeSideBar={activeSideBar}
          body={body}
          user={user} />
        <div className='wrap'>
          <div className='Content'>
            <Switch>
              <Route exact path='/' component={home} />
              <Route path='/user/:id/edit' component={editUser} />
              <Route path='/user/:id' component={userProfile} />
              <Route path='/chars' component={Chars} />
              <Route path='/campaigns' component={Campaigns} />
              <Route path='/users' component={Users} exact />
              <Route path='/library' component={Library} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App
