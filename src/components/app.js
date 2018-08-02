import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
    let user = new User()
    user.events.on('onLoad', this.handlerForceUpdate)
    this.state = {
      user: user,
      activeSideBar: props.activeSideBar,
      body: props.body
    }
    this.state.user.load(props.userId || null)
  }

  handlerForceUpdate () {
    this.forceUpdate()
  }

  render () {
    let {user, body, activeSideBar} = this.state
    let home = () => <Page />
    let editUser = () => <Page page='editProfile' user={user} />
    let userProfile = () => <Page page='userProfile' user={user} />
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

          /*
          <Route path='/chars' component={Chars} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/users' component={Users} exact />
          <Route path='/library' component={Library} />
            */
        </Switch>
      </div>
    )
  }
}

export default App
