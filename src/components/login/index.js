import React from 'react'
import Input from '../forms/input.js'
import Popup from '../popup/index.js'

/* TODO: add title & close in popup Component */
/* TODO: add design errors */
/* TODO: add control in inputs values */
/* TODO: Think forms constructor */

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: props.user.email,
      password: '',
      error: ''
    }
  }

  activeUser () {
    let {user, close} = this.props
    let {email, password} = this.state
    if (email && password) {
      user.email = email
      user.password = password
      user.save()
        .then((response) => {
          if (response) close()
          else {
            this.setState({error: 'Los datos de registro/login son erroneos'})
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      this.setState({error: 'Datos incompletos'})
    }
  }

  handleChangeEmail (value) {
    this.setState({email: value})
  }
  handleChangePassword (value) {
    this.setState({password: value})
  }

  render () {
    let {error} = this.state
    return (
      <Popup title='Acceso / Registro' onClose={this.props.close}>
        <form action='#' className='Login'>
          {!!error && <div className='ErrorMessage'>{error}</div>}
          <Input
            type='email'
            required
            label='email'
            name='email'
            placeholder='ejemplo@email.com'
            onChange={this.handleChangeEmail.bind(this)} />
          <Input
            type='password'
            required
            label='contraseña'
            name='email'
            onChange={this.handleChangePassword.bind(this)} />
          <button type='button' onClick={this.activeUser.bind(this)}>Aceptar</button>
        </form>
      </Popup>
    )
  }
}

export default Login
