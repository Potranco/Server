
export default class Char {
  constructor (charId = false) {
    this.id = charId
    this.image = '/img/default_char.png'
    this.active = false
    this.url = ''
    this.finish = false
    this.step = 0

    this.name = 'Random'
    this.race = null
    this.sex = null
    this.size = null
    this.velocity = null
    this.languages = []
    this.levelAjustment = 0
    this.class = []
    this.favotiteClasses = []
    this.alignment = {
      legal: false,
      neutralEtic: false,
      chaos: false,
      good: false,
      neutralMoral: false,
      bad: false
    }
    this.vision = []
    this.statistics = {
      FUE: { base: 0, mod: 0, temp: 0, tempMod: 0 },
      CON: { base: 0, mod: 0, temp: 0, tempMod: 0 },
      DES: { base: 0, mod: 0, temp: 0, tempMod: 0 },
      INT: { base: 0, mod: 0, temp: 0, tempMod: 0 },
      SAB: { base: 0, mod: 0, temp: 0, tempMod: 0 },
      CAR: { base: 0, mod: 0, temp: 0, tempMod: 0 }
    }
    this.salvation = {
      REF: {base: 0, statistics: 0, magic: 0, various: 0, temp: 0},
      FOR: {base: 0, statistics: 0, magic: 0, various: 0, temp: 0},
      VOL: {base: 0, statistics: 0, magic: 0, various: 0, temp: 0},
      type: []
    }
    this.attack = {
      mele: { base: [0], modFUE: 0, modSize: 0, various: 0, temp: 0, modRace: 0 },
      distance: { base: [0], modFUE: 0, modSize: 0, various: 0, temp: 0, modRace: 0 },
      race: []
    }
    this.dotes = {
      whenCreate: 0,
      list: []
    }
    this.abilities = {
      whenCreate: 0,
      list: []
    }
    this.spells = []
  }

  load () {
    console.log('load char', this.charId)
  }

  save () {
    console.log('save char', this.charId)
  }

  delete () {
    console.log('delete char', this.charId)
  }
}
