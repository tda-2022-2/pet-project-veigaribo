import { Pressable, StyleSheet, View } from 'react-native'
import { VText } from '../basic'
import Enemy from './Enemy'
import { useGameContext } from '../../game'

export default function Game(props) {
  const { navigation } = props
  const { data } = useGameContext()
  const { player, misc } = data

  return (
    <View style={styles.container}>
      <VText size={50}>{player.score}</VText>
      <View style={styles.middle}>
        <Enemy />
        <VText>{misc.message}</VText>
      </View>
      <Pressable onPress={() => navigation.navigate('MainMenu')} style={styles.button}>
        <VText size={36}>Menu</VText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  middle: {
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    padding: 10,
  },
})
