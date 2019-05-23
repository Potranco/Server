import React from 'react'
import Home from './home.js'
import UserProfile from './user/profile.js'
import EditProfile from './user/edit.js'
import CreateChar from '../../char/create/index.js'
import Chars from './chars/list.js'

let home = () => <Home />
let userProfile = (props) => <UserProfile {...props} />
let editProfile = (props) => <EditProfile {...props} />
let createChar = (props) => <CreateChar {...props} />
let chars = (props) => <Chars {...props} />

export default {home, userProfile, editProfile, createChar, chars}
