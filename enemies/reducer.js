import { clamp } from '../math'
import { ACTION_ENEMY_DAMAGE } from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_ENEMY_DAMAGE: {
      const newHealth = clamp(state.health - action.value, 0, state.maxHealth)
      return { ...state, health: newHealth }
    }
    default:
      return state
  }
}
