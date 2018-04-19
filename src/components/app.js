import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import SideBar from './sidebar/index.js'
import Header from './header.js'
import User from '../user/index.js'
import MyComponent from './MyComponent'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>

const Links = () => (
  <nav>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    <NavLink to='/component'>Component</NavLink>
  </nav>
)

const MyComponentCompiled = () => <MyComponent />

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
      <Links />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/component' component={MyComponentCompiled} />
      </Switch>
    </div>
  )
}

export default App
