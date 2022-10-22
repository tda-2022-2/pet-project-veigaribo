import { Pressable, StyleSheet, View } from 'react-native'
import VText from '../basic/VText'
import { useGameContext, enemyDamage } from '../../context'

export default function Enemy() {
  const { items, dispatch } = useGameContext()

  function onPress() {
    const action = enemyDamage(1)
    dispatch(action)
  }

  const { enemy } = items
  const { appearance } = enemy

  return (
    <View style={styles.enemy}>
      <Pressable onPress={onPress}>
        <VText color={appearance.color} size={72}>{appearance.glyph}</VText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  enemy: {
    height: '100%',
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
