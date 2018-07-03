import React from 'react'
import Home from './home.js'
import UserProfile from '../../user/profile.js'
import EditProfile from '../../user/edit.js'

let home = () => <Home />
let userProfile = (user) => <UserProfile user={user} />
let editProfile = (user) => <EditProfile user={user} />

export default {home, userProfile, editProfile}
