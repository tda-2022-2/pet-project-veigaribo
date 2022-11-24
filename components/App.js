import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ContextProvider } from '../game'
import { MainMenu } from './main-menu'
import { Game } from './in-game'

const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    Terminus: require('../assets/fonts/TerminusTTF-4.49.2.ttf'),
  })

  if (!loaded) return <></>

  return (
    <>
      <StatusBar style="auto" />
      <ContextProvider style={styles.main}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    color: '#fff',
    backgroundColor: '#000',
  },
})
