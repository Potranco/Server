import React from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import Header from '../../components/headers/simple.js'
import FormRace from './form.js'

class Races extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      races: []
    }
    this.listRaces = this.listRaces.bind(this)
  }

  componentDidMount () {
    let header = {
      method: 'GET'
    }
    const url = 'http://localhost:3000/api/races/'
    fetch(url, header)
      .then((response) => response.ok && response.json())
      .then((data) => {
        this.setState({races: data})
      })
  }

  listRaces () {
    let {races} = this.state
    return <ul className='list'>
      {
        races.map((race, index) => {
          let url = '/backweb/races/edit/' + race._id
          return <li key={index}>
            <NavLink to={url}>
              <b>{race.name}</b>
            </NavLink>
            &nbsp;
            <NavLink to='/backweb/races/delete'>Eliminar</NavLink>
          </li>
        })
      }
    </ul>
  }

  render () {
    let profile = ({match}) => {
      let race = this.state.races.find((race) => race._id === match.params.id)
      return <FormRace race={race} />
    }
    return (
      <div>
        <Header>
          <h1>Backweb Razas</h1>
          <div className='Menu'>
            <NavLink to='/backweb/'>Backweb</NavLink>
            <NavLink to='/backweb/races/create'>Nueva raza</NavLink>
          </div>
        </Header>
        <div className='Content'>
          <Switch>
            <Route exact path='/backweb/races/create' component={FormRace} />
            <Route exact path='/backweb/races/edit/:id' component={profile} />
            <Route exact path='/backweb/races/'>
              { this.listRaces() }
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Races)
