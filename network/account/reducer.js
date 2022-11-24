import { ACTION_ACCOUNT_SET } from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_ACCOUNT_SET:
      return action.value
    default:
      return state
  }
}
