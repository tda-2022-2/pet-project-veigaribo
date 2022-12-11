import { StyleSheet, Text } from 'react-native'

export default function VText(props) {
  const { color, size } = props
  const style = styles({ color, size })

  return <Text style={style.text}>{props.children}</Text>
}

const styles = ({ color = 'red', size = 12 }) => StyleSheet.create({
  text: {
    color: color,
    fontFamily: 'Terminus',
    fontSize: size
  },
})
