import React from 'react'
import Header from '../components/headers/simple.js'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import Races from './races/index.js'

class Backweb extends React.Component {
  render () {
    return (
      <div className='Backweb'>
        <Switch>
          <Route exact path='/backweb'>
            <div>
              <Header>
                <h1>Home del Backweb</h1>
              </Header>
              <div className='Content'>
                <NavLink to='./races'>Razas</NavLink>
              </div>
            </div>
          </Route>
          <Route path='/backweb/races' component={Races} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Backweb)
