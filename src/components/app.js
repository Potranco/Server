import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Backweb from './backweb/index.js'
import SideBar from './sidebar/index.js'
import User from '../user/index.js'
import Page from './page/index.js'

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
    let editUser = () => <Page page='editProfile' user={user} currentUser={user} />
    let userProfile = ({match}) => <Page page='userProfile' currentUser={user} userId={match.params.id} />
    let createChar = () => <Page page='createChar' currentUser={user} step='0' />
    let backweb = () => <Backweb />
    return (
      <div>
        <SideBar
          activeSideBar={activeSideBar}
          body={body}
          user={user} />
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/user/:id/edit' component={editUser} />
          <Route path='/user/:id' component={userProfile} />
          <Route path='/char/create' component={createChar} />

          /*
          <Route path='/chars' component={Chars} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/users' component={Users} exact />
          <Route path='/library' component={Library} />
            */

          /* BACKWEB */
          <Route exact path='/backweb' component={backweb} />
        </Switch>
      </div>
    )
  }
}

export default App
