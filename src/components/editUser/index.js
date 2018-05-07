import React from 'react'
import Input from '../forms/input.js'
import {BoxContent} from '../utils/index.js'

class EditUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: props.user
    }
  }
  render () {
    let {user} = this.state
    return (
      <BoxContent title='edita tu perfil'>
        <Input type='email' required label='email' name='email' placeholder='ejemplo@email.com' value={user.email} />
        <Input type='password' required label='contraseña' name='password' placeholder='contraseña de acceso' />
        <Input type='text' required label='apodo' name='name' placeholder='Como quieres que te llamen' value={user.name} />
        <Input type='text' required label='avatar' name='avatar' placeholder='imagen. lo vamos a cambiar' value={user.avatar} />
        <label>
          <input type='checkbox' name='active' /> Cuenta activa
        </label>
        <button type='button'>Aceptar</button>
      </BoxContent>
    )
  }
}

export default EditUser
