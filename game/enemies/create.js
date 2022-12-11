import { roll } from '../dice'

function make({
  name, appearance, health, ac, bounty = health
}) {
  return {
    name,
    appearance,
    health,
    maxHealth: health,
    ac,
    bounty
  }
}

export function bat() {
  return make({
    name: 'Bat',
    appearance: {
      glyph: 'B',
      color: '#5511FF'
    },
    health: roll(1, 8),
    ac: 3
  })
}

export function centaur() {
  return make({
    name: 'Centaur',
    appearance: {
      glyph: 'C',
      color: '#FF1111'
    },
    health: roll(4, 8),
    ac: 4
  })
}

export function dragon() {
  return make({
    name: 'Dragon',
    appearance: {
      glyph: 'D',
      color: '#55FF11'
    },
    health: roll(10, 8),
    ac: -1
  })
}

export function create() {
  const options = [bat, centaur, dragon]

  const index = Math.floor(Math.random() * options.length)
  return options[index]()
}
