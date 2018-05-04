import React from 'react'
import Input from '../forms/input.js'
import Box from '../utils/index.js'

class EditUser extends React.Component {
  render () {
    return (
      <Box title='edita tu perfil'>
        <Input type='email' required label='email' name='email' placeholder='ejemplo@email.com' />
        <Input type='password' required label='contraseña' name='password' placeholder='contraseña de acceso' />
        <Input type='text' required label='apodo' name='name' placeholder='Como quieres que te llamen' />
        <Input type='text' required label='avatar' name='avatar' placeholder='imagen. lo vamos a cambiar' />
        <label>
          <input type='checkbox' name='active' /> Cuenta activa
        </label>
        <button type='button'>Aceptar</button>
      </Box>
    )
  }
}

export default EditUser
