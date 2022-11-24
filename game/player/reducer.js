import { ACTION_PLAYER_SCORE } from './actions'

export function reducer(_schedule, state, action) {
  switch (action.type) {
    case ACTION_PLAYER_SCORE:
      return { ...state, score: state.score + action.value }
    default:
      return state
  }
}
