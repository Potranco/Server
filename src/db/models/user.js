import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userModel = new Schema({
  name: { type: String },
  email: { type: String },
  avatar: { type: String },
  active: { type: Boolean }
})

export default mongoose.model('user', userModel)
