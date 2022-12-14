import { Pressable, StyleSheet } from 'react-native'

export default function MainMenuButton(props) {
  const { onPress } = props

  return <Pressable style={styles.button} onPress={onPress}>{props.children}</Pressable>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    padding: 10,

    width: '100%',
  },
})
