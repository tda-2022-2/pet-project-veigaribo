export const ACTION_MISC_SET_MESSAGE = Symbol('ACTION_MISC_SET_MESSAGE')

export function setMessage(message) {
  return { type: ACTION_MISC_SET_MESSAGE, value: message }
}
