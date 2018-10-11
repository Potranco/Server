import React from 'react'
import Header from '../../headers/simple.js'
import fetch from 'isomorphic-fetch'

class Races extends React.Component {
  callRaces () {
    let header = {
      method: 'GET'
    }
    const url = 'http://localhost:3000/api/races/'
    fetch(url, header)
      .then((response) => response.ok && response.json())
      .then((data) => {
        console.log('response', data)
      })
  }

  render () {
    console.log('entramos en el back de razas')
    return (
      <div>
        <Header>
          <h1>Backweb Razas</h1>
        </Header>
        {this.callRaces()}
      </div>
    )
  }
}

export default Races
