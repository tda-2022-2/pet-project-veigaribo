import { StyleSheet, View } from 'react-native'
import VText from '../basic/VText'
import MainMenuButton from './MainMenuButton'
import MainMenuSpacing from './MainMenuSpacing'
import MainMenuMenu from './MainMenuMenu'

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <MainMenuMenu>
        <MainMenuButton>
          <VText>Play</VText>
        </MainMenuButton>
        <MainMenuSpacing />
        <MainMenuButton>
          <VText>Credits</VText>
        </MainMenuButton>
      </MainMenuMenu>
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
})
