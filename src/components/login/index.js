import React from 'react'
import Input from '../forms/input.js'
import {Popup} from '../popup/index.js'
import {isEmail} from '../utils/index.js'

/* TODO: Think forms constructor */

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: props.user.email || '',
      password: '',
      error: '',
      onClose: props.onClose
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
  }

  activeUser () {
    let {user, onClose} = this.props
    let {email, password} = this.state
    if (!email && !password) return this.setState({error: 'Datos incompletos'})
    if (!isEmail(email)) return this.setState({error: 'Email incorrecto'})

    user.email = email
    user.password = password
    user.save()
      .then((response) => {
        if (response) {
          var localStorage = window.localStorage
          localStorage.setItem('userId', user.id)
          return onClose()
        } else {
          this.setState({error: 'Los datos de registro/login son erroneos'})
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleChangeEmail (value) {
    this.setState({email: value})
  }
  handleChangePassword (value) {
    this.setState({password: value})
  }

  render () {
    let {error, onClose, email, password} = this.state
    return (
      <Popup title='Acceso / Registro' onClose={onClose}>
        <form action='#' className='Login'>
          {!!error && <div className='ErrorMessage'>{error}</div>}
          <Input type='email' value={email} required label='email' name='email' placeholder='ejemplo@email.com'
            onChange={this.handleChangeEmail.bind(this)} />
          <Input type='password' value={password} required label='contraseña' name='email'
            onChange={this.handleChangePassword.bind(this)} />
          <button type='button' onClick={this.activeUser.bind(this)}>Aceptar</button>
        </form>
      </Popup>
    )
  }
}

export default Login
