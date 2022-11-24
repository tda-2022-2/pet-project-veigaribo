import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ContextProvider as GameContextProvider } from '../game'
import { ContextProvider as NetworkContextProvider } from '../network'
import { MainMenu } from './main-menu'
import { Game } from './in-game'
import { Connect } from './connect'

const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    Terminus: require('../assets/fonts/TerminusTTF-4.49.2.ttf'),
  })

  if (!loaded) return <></>

  return (
    <>
      <StatusBar style="auto" />
      <GameContextProvider >
        <NetworkContextProvider >
          <NavigationContainer style={styles.main}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="MainMenu" component={MainMenu} />
              <Stack.Screen name="Game" component={Game} />
              <Stack.Screen name="Connect" component={Connect} />
            </Stack.Navigator>
          </NavigationContainer>
        </NetworkContextProvider>
      </GameContextProvider>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    color: '#fff',
    backgroundColor: '#000',
  },
})
