
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
    this.class = null
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
