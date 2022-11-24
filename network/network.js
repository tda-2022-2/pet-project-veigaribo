import { setUrl } from './server'

export async function checkAndSet(dispatch, url) {
  // assumes the server is not in a subpath
  const u = new URL(url)
  u.pathname = '/health'

  const response = await fetch(u)
  if (response.status !== 200) return

  const json = await response.json()
  if (json.status !== 'fine') return

  dispatch(setUrl(u.origin))
}
