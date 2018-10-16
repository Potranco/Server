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
    chaos: { type: Boolean },
    good: { type: Boolean },
    neutralMoral: { type: Boolean },
    bad: { type: Boolean }
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
    VOL: {type: Number},
    type: [
      {
        id: { type: String },
        base: {type: Number}
      }
    ]
  },
  attack: {
    mele: {type: Number},
    distance: {type: Number},
    race: [{
      id: {type: String},
      attactType: {
        mele: {type: Number},
        distance: {type: Number}
      }
    }]
  },
  dotes: {
    whenCreate: {type: Number},
    list: [
      {
        idDote: {type: String}
      }
    ]
  },
  abilities: {
    whenCreate: {type: Number},
    list: [{
      idAbility: {type: String}
    }]
  },
  spells: [{
    id: {type: String},
    level: {type: Number},
    perDay: {type: Number}
  }],
  others: {type: String}
})

export default mongoose.model('race', raceModel)
