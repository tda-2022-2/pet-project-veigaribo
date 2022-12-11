import { clamp } from '../math'
import { playerScore } from '../player'
import { ACTION_ENEMY_DAMAGE, ACTION_ENEMY_SWAP } from './actions'
import { enemySwap } from './actions'
import { create } from './create'

export function reducer(schedule, state, action) {
  switch (action.type) {
    case ACTION_ENEMY_DAMAGE: {
      if (action.roll < state.ac) return state

      const newHealth = clamp(state.health - action.value, 0, state.maxHealth)

      if (newHealth <= 0) {
        schedule(enemySwap())
        schedule(playerScore(state.bounty))

        return state
      } else {
        return { ...state, health: newHealth }
      }
    }
    case ACTION_ENEMY_SWAP: {
      const newEnemy = create()
      return newEnemy
    }
    default:
      return state
  }
}
