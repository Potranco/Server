import React from 'react'
import Header from '../headers/simple.js'
import { Switch, Route } from 'react-router-dom'
import Races from './races/index.js'

class Backweb extends React.Component {
  render () {
    return (
      <div className='Backweb'>
        <Switch>
          <Route exact path='/backweb'>
            <Header>
              <h1>Home del Backweb</h1>
            </Header>
            <ul>
              <li>Razas</li>
            </ul>
          </Route>
          <Route path='/backweb/races' component={Races} />
        </Switch>
      </div>
    )
  }
}

export default Backweb
