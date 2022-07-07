import { View, Text, StyleSheet } from 'react-native'
export function ListFooter(props) {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
})