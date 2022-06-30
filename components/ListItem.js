import { View, Text, StyleSheet } from 'react-native'

export function ListItem( props ) {
  return (
    <View style={ styles.item }>
      <Text>{ props.item.name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
  }
})