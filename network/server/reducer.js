import { ACTION_SERVER_SET_URL } from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_SERVER_SET_URL:
      return { ...state, url: action.value }
    default:
      return state
  }
}
