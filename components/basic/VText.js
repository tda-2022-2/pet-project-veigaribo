import { StyleSheet, Text } from 'react-native'

export default function VText(props) {
  return <Text style={styles.text}>{props.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontFamily: 'Terminus',
  },
})
