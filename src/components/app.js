import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import SideBar from './sidebar/index.js'
import Header from './header.js'
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
  let showUser = {
    name: 'test',
    avatar: 'https://secure.gravatar.com/avatar/b2220febee717567cd9edb1b7aacf0a2?s=50&d=https%3A%2F%2Fstatic.canva.com%2Fimages%2Fdefault_avatar_50.png',
    email: 'test@project.d20',
    url: '/user/0/'
  }
  return (
    <div>
      <SideBar display user={showUser} />
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
