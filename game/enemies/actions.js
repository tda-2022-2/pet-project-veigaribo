export const ACTION_ENEMY_DAMAGE = Symbol('ACTION_ENEMY_DAMAGE')
export const ACTION_ENEMY_SWAP = Symbol('ACTION_ENEMY_SWAP')

export function enemyDamage(amount, roll) {
  return { type: ACTION_ENEMY_DAMAGE, value: amount, roll }
}

export function enemySwap() {
  return { type: ACTION_ENEMY_SWAP }
}
