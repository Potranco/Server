import React from 'react'
import Generic from './generic.js'

let home = (user) => <Generic user={user} />
let userProfile = (user) => <Generic user={user} />
let editProfile = (user) => <Generic user={user} />

export default {home, userProfile, editProfile}
