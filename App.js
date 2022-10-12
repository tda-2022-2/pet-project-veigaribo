import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import App from './components/App'

export default function $App() {
  const [loaded] = useFonts({
    Terminus: require('./assets/fonts/TerminusTTF-4.49.2.ttf'),
  })

  if (!loaded) return <></>

  return (
    <>
      <StatusBar style="auto" />
      <App style={styles.main} />
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    color: '#fff',
    backgroundColor: '#000',
  },
})
