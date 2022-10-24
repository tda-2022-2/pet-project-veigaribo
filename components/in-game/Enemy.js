import { Pressable, StyleSheet, View } from 'react-native'
import { VText, VFillBar } from '../basic'
import { useGameContext } from '../../context'
import { damage } from '../../game'

export default function Enemy() {
  const { data, dispatch } = useGameContext()

  function onPress() {
    damage(data, dispatch)
  }

  const { enemy } = data
  const { appearance } = enemy

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <VText color={appearance.color} size={72}>{appearance.glyph}</VText>
      </Pressable>
      <VText color={appearance.color}>{enemy.health}/{enemy.maxHealth}</VText>
      <VFillBar fill={enemy.health / enemy.maxHealth} barColor={appearance.color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '200px',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
