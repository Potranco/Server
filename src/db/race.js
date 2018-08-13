import DBMethods from './DBMethods.js'
import RaceModel from './models/race.js'

export default class Race extends DBMethods {
  constructor () {
    super()
    this.model = RaceModel
  }
}
