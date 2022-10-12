import { StyleSheet, View } from 'react-native'

export default function MainMenuMenu(props) {
  return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '66%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
