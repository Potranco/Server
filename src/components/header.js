import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='Header'>
          <h1>Personajes</h1>
          <div className='CreateRandom'>Crear personaje</div>
          <div className='CharList'>
            <ul>
              <li>
                <div className='More'>+</div>
                Más...
              </li>
            </ul>
          </div>
        </div>
        <div className='CampaignList'>
          Listado de Campañas por definir
        </div>
      </div>
    )
  }
}

export default Header
