import { ACTION_MISC_SET_MESSAGE } from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_MISC_SET_MESSAGE: {
      return { ...state, message: action.value }
    }
    default:
      return state
  }
}
