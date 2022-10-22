import { create } from './enemy'
import { roll } from '../dice'

export function bat() {
  return create({
    appearance: {
      glyph: 'B',
      color: '#5511FF'
    },
    health: roll(1, 8)
  })
}
