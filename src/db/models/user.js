import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userModel = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  active: { type: Boolean },
  password: { type: String } // TODO: add encrypter (mongoose-encrypter)
})

export default mongoose.model('user', userModel)
