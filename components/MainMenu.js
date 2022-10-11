import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
          <Text>Play</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff'
  }
});
