import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function ListItem( props ) {
  return (
    <View style={ styles.item }>
      <TouchableOpacity onPress={ () => props.remove(props.item.id) }>
        <Text>Delete</Text>
      </TouchableOpacity>
      <Text style={ styles.itemText}>{ props.item.name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 20,
  },
})