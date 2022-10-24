import { roll } from './dice'
import { enemyDamage } from './enemies'
import { setMessage } from './misc'

export function damage(data, dispatch) {
  const { player, enemy } = data
  const { attack, damage } = player
  let message = ''

  const attackr = roll(attack.count, attack.sides, attack.mod)
  message += `Rolled ${attackr} for attack`

  if (attackr < enemy.ac) {
    message += `, which is lower than the enemy AC of ${enemy.ac}. Deals 0 damage.`
    return
  }

  message += `, which is greater than the enemy AC of ${enemy.ac}.`

  const damager = roll(damage.count, damage.sides, damage.mod)
  message += ` Deals ${damager} damage.`

  const actions = [enemyDamage(damager, attack), setMessage(message)]
  actions.forEach(dispatch)
}
