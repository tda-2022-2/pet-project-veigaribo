export const ACTION_SERVER_SET_URL = Symbol('ACTION_SERVER_SET_URL')

export function setUrl(url) {
  return { type: ACTION_SERVER_SET_URL, value: url }
}
