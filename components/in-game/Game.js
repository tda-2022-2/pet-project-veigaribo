import { StyleSheet, View } from 'react-native'
import { VText } from '../basic'
import Enemy from './Enemy'
import { useGameContext } from '../../context'

export default function Game() {
  const { data } = useGameContext()
  const { misc } = data

  return (
    <View style={styles.container}>
      <Enemy />
      <VText>{misc.message}</VText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
