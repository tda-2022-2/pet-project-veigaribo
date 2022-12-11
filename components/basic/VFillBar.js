import { StyleSheet, View } from 'react-native'

export default function VFillBar(props) {
  const { fill, height, backgroundColor, barColor } = props
  const style = styles(fill, { height, backgroundColor, barColor })

  return (
    <View style={style.container}>
      <View style={style.bar} />
    </View>
  )
}

const styles = (fill = 0.0, { height = 20, width = 100, backgroundColor = '#000', barColor = '#fff' }) => {
  const percentage = `${fill * 100}%`

  return StyleSheet.create({
    container: {
      height,
      width,
      backgroundColor,
      flex: 1,
      justifyContent: 'start',
    },
    bar: {
      height,
      width: percentage,
      backgroundColor: barColor,
    }
  })

}
