export const ACTION_ENEMY_DAMAGE = Symbol('ACTION_ENEMY_DAMAGE')

export function enemyDamage(amount) {
  return { type: ACTION_ENEMY_DAMAGE, value: amount }
}
