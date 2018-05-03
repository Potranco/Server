import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SideBar from './sidebar/index.js'
import Header from './header.js'
import User from '../user/index.js'
import EditUser from './editUser/index.js'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>

const App = (props) => {
  const user = (props.userId)
    ? new User(props.userId)
    : new User()

  return (
    <div>
      <SideBar
        activeSideBar={props.activeSideBar}
        body={props.body}
        user={user} />
      <div className='wrap Content'>
        <Header />
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user' component={EditUser} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  )
}

export default App
