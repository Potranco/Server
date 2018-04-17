import React from 'react'
import Input from '../forms/input.js'

/* TODO: WrapFixed change in component popup */
/* TODO: add loading */
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
    user.email = this.state.email
    user.password = this.state.password
    user.save()
      .then((response) => {
        if (response) close()
        else {
          this.setState({error: 'No se pudo acceder a la base de datos'})
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
    let {error} = this.state
    return (
      <div className='WrapFixed'>
        <div className='BackgroundFixed' />
        <div className='Login'>
          {!!error && <div>{error}</div>}
          <label>email</label>
          <Input type='email' name='email' onChange={this.handleChangeEmail.bind(this)} />
          <label>contraseña</label>
          <Input type='password' name='email' onChange={this.handleChangePassword.bind(this)} />
          <button onClick={this.activeUser.bind(this)}>Aceptar</button>
        </div>
      </div>
    )
  }
}

export default Login
