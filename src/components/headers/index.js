import React from 'react'
import Generic from './generic.js'
import Profile from './profile.js'

let home = (props) => <Generic {...props} />
let userProfile = (props) => <Profile {...props} />
let editProfile = (props) => <Profile {...props} />

export default {home, userProfile, editProfile}
