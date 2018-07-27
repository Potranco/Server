import mongoose from 'mongoose'
const Schema = mongoose.Schema

const raceModel = new Schema({
  name: { type: String },
  image: { type: String },
  active: { type: Boolean },
  description: { type: String },
  special: {type: Boolean},
  modifiers: {type: Object}
})

export default mongoose.model('race', raceModel)
