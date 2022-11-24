export const ACTION_ACCOUNT_SET = Symbol('ACTION_SET_ACCOUNT')

export function login(user) {
  return { type: ACTION_ACCOUNT_SET, value: user }
}
