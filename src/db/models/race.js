import mongoose from 'mongoose'
const Schema = mongoose.Schema

const raceModel = new Schema({
  name: { type: String },
  image: { type: String },
  active: { type: Boolean },
  description: { type: String },
  favotiteClasses: { type: Array },
  size: { type: String },
  velocity: { type: Number },
  languages: { type: Array },
  levelAjustment: { type: Number },
  alignment: {
    legal: { type: Boolean },
    neutralEtic: { type: Boolean },
    caos: { type: Boolean },
    bueno: { type: Boolean },
    neutralMoral: { type: Boolean },
    malo: { type: Boolean }
  },
  vision: [{
    distance: {type: Number},
    type: { type: String }
  }],
  statistics: {
    FUE: {type: Number},
    CON: {type: Number},
    DES: {type: Number},
    INT: {type: Number},
    SAB: {type: Number},
    CAR: {type: Number}
  },
  salvation: {
    REF: {type: Number},
    FOR: {type: Number},
    VOL: {type: Number}
  },
  attack: {
    mele: {
      impact: {type: Number},
      damage: {type: Number}
    },
    distance: {
      impact: {type: Number},
      damage: {type: Number}
    },
    race: [
      {
        idRace: {type: Number}
      }
    ]
  },
  dotes: {
    whenCreate: {type: Number},
    list: [
      {
        idDote: {type: Number}
      }
    ]
  },
  abilities: {
    whenCreate: {type: Number},
    list: [{
      idAbility: {type: Number}
    }]
  },
  spells: [{
    id: {type: Number},
    level: {type: Number},
    perDay: {type: Number}
  }],
  others: {type: String}
})

export default mongoose.model('race', raceModel)
