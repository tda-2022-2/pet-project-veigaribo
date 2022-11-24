import { Pressable, StyleSheet, View } from 'react-native'
import VText from '../basic/VText'
import ServerInput from './ServerInput'

export default function Connect(props) {
  const { navigation } = props

  function onMenu() {
    navigation.navigate('MainMenu')
  }

  return (
    <View style={styles.container}>
      <ServerInput/>
      <Pressable onPress={onMenu} style={styles.button}>
        <VText size={36}>Menu</VText>
      </Pressable>
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
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    padding: 10,
  },
})
