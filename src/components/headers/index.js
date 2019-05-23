import React from 'react'
import Generic from './generic.js'
import Simple from './simple.js'
import Profile from './profile.js'

let home = (props) => <Generic {...props} />
let userProfile = (props) => <Profile {...props} />
let editProfile = (props) => <Profile {...props} />
let createChar = (props) => <Simple {...props} ><h1>Crear personaje</h1></Simple>
let chars = (props) => <Simple {...props} ><h1>Personaje</h1></Simple>

export default {home, userProfile, editProfile, createChar, chars}
