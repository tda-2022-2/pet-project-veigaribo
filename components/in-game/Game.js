import { StyleSheet, View } from 'react-native'
import VText from '../basic/VText'
import Enemy from './Enemy'
import { useGameContext } from '../../context'

export default function Game() {
  const { items } = useGameContext()
  const { enemy } = items

  return (
    <View style={styles.container}>
      <Enemy />
      <VText>{enemy.health}/{enemy.maxHealth}</VText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
