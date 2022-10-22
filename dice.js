function add(x, y) { return x + y }

export function roll(amount, faces) {
  const results = new Array(amount).fill(0).map(() => {
    return Math.ceil(Math.random() * faces)
  })

  return results.reduce(add, 0)
}
