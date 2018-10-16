export default {
  name: 'PruebasEnano',
  image: 'https://i.pinimg.com/564x/6a/81/a1/6a81a19473eef49e82f5a79106a1b27c.jpg',
  active: true,
  description: 'test',
  favotiteClasses: ['Guerrero'],
  size: 'Mediano',
  velocity: 30,
  languages: [],
  levelAjustment: 0,
  alignment: {
    legal: false,
    neutralEtic: false,
    chaos: false,
    good: false,
    neutralMoral: false,
    bad: false
  },
  vision: [
    {
      type: 'monocromática',
      distance: 20
    }
  ],
  statistics: {
    FUE: 0,
    CON: 0,
    DES: 0,
    INT: 0,
    SAB: 0,
    CAR: 0
  },
  salvation: {
    REF: 0,
    FOR: 0,
    VOL: 0,
    type: [
      {
        id: 'magic',
        base: 2
      },
      {
        id: 'venom',
        base: 2
      }
    ]
  },
  attack: {
    mele: 0,
    distance: 0,
    race: [
      {
        id: 'kobolds',
        attactType: {
          mele: 1,
          distance: 1
        }
      },
      {
        id: 'goblinoides',
        attactType: {
          mele: 1,
          distance: 1
        }
      }
    ]
  },
  dotes: {
    whenCreate: 0,
    list: [
      {
        id: 'Usar objeto mágico',
        value: -2
      }
    ]
  },
  abilities: {
    whenCreate: 0,
    list: [
      {
        id: 'minería',
        value: 2
      },
      {
        id: 'detectar trampas',
        value: 2
      },
      {
        id: 'intuir direccion',
        value: 2
      }
    ]
  },
  spells: [],
  others: ''
}
