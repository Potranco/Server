import React from 'react'
import Input from '../forms/input.js'
import UpdateImage from '../forms/updateImage.js'
import {isEmail, BoxContent} from '../utils/index.js'

class EditUser extends React.Component {
  constructor (props) {
    super(props)
    let { email, password, avatar, name, active } = props.user
    this.state = {
      email: email,
      password: password,
      avatar: avatar,
      name: name,
      active: active,
      error: '',
      message: ''
    }
  }

  saveUser () {
    let {user} = this.props
    let {email, password, avatar, name, active} = this.state
    if (!email && !password) return this.setState({error: 'Datos incompletos'})
    if (!isEmail(email)) return this.setState({error: 'Email incorrecto'})

    user.email = email
    user.password = password
    user.name = name
    user.avatar = avatar
    user.active = active
    user.save()
      .then((response) => {
        if (response) {
          this.setState({message: 'Datos guardados'})
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
  handleChangeName (value) {
    this.setState({name: value})
  }
  handleChangeAvatar (value) {
    this.setState({avatar: value})
  }
  handleChangeActive () {
    this.setState({active: !this.state.active})
  }
  handleCLickCancel (value) {
    let { email, password, avatar, name, active } = this.props.user
    this.setState({
      email: email,
      password: password,
      avatar: avatar,
      name: name,
      active: active,
      error: '',
      message: ''
    })
  }

  render () {
    let { email, password, avatar, name, active, error, message } = this.state
    return (
      <BoxContent title='edita tu perfil' className='EditUser BoxContent Middle'>
        {!!message && <div className='Message'>{message}</div>}
        {!!error && <div className='ErrorMessage'>{error}</div>}
        <Input type='email' required label='email' name='email' placeholder='ejemplo@email.com' value={email}
          onChange={this.handleChangeEmail.bind(this)} />
        <Input type='password' required label='contraseña' name='password' placeholder='contraseña de acceso' value={password}
          onChange={this.handleChangePassword.bind(this)} />
        <Input type='text' required label='apodo' name='name' placeholder='Como quieres que te llamen' value={name}
          onChange={this.handleChangeName.bind(this)} />
        <img src={avatar} alt='avatar' />
        <UpdateImage userid={this.props.user.id} onchange={this.handleChangeAvatar.bind(this)} />
        <label>
          <input type='checkbox' name='active' defaultChecked={active} value={active} onChange={this.handleChangeActive.bind(this)} /> Cuenta activa
        </label>
        <div className='Buttons'>
          <button type='button' onClick={this.handleCLickCancel.bind(this)}>Cancelar</button>
          <button type='button' onClick={this.saveUser.bind(this)}>Aceptar</button>
        </div>
      </BoxContent>
    )
  }
}

export default EditUser
