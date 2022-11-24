import { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import VText from '../basic/VText'
import { checkAndSet, useNetworkContext } from '../../network'

export default function ServerInput() {
  const { data, dispatch } = useNetworkContext()

  const [url, onChangeText] = useState("http://localhost:8080")
  const [loading, setLoading] = useState(false)

  async function onConfirm() {
    setLoading(true)
    try {
      await checkAndSet(dispatch, url)
    } finally {
      setLoading(false)
    }
  }

  if (data.server.url != null) {
    <View style={styles.container}></View>
  }

  return (
    <View style={styles.container}>
      <VText style={styles.item}>Server URL (example "http://localhost:8080/")</VText>
      <TextInput style={[styles.item, styles.input]} onChangeText={onChangeText} value={url} />
      <Pressable style={styles.item} onPress={onConfirm} disabled={loading}>
        <VText>Confirm</VText>
      </Pressable>
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
  item: {
    marginBottom: '5px',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    padding: 10,
    color: 'white'
  }
})
