import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Constants from 'expo-constants'
import {useState} from 'react'


export default function App() {
  const LIST = [
    { id: '1' , name: 'Banana', status: false },
    { id: '2' , name: 'Pineapple', status: false },
    { id: '3' , name: 'Eggplant', status: false },
    { id: '4' , name: 'Durian', status: false },
  ]

  // application state
  const [ListData, SetListData] = useState(LIST)

  //function to render list item
  const renderItem = ({item}) => (
    <View style={styles.listItem} >
      <Text style={styles.listText} >{item.name}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={ListData} 
        keyExtractor={ (item) => item.id }
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#f7efb2',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
  },
  listText: {
    fontSize: 20,
  }
});
