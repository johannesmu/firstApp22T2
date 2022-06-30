import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import {useState} from 'react'
import { ListItem } from './components/ListItem';


export default function App() {
  const LIST = [
    { id: '1' , name: 'Banana', status: false },
    { id: '2' , name: 'Pineapple', status: false },
    { id: '3' , name: 'Eggplant', status: false },
    { id: '4' , name: 'Durian', status: false },
  ]

  // application state
  const [ListData, SetListData] = useState(LIST)
  const [input,setInput] = useState('')

  // function to add value of input to ListData (add an item to list)
  const addItem = () => {
    // use timestamp to create unique id
    let newId = new Date().getTime()
    let newItem = { id: newId, name: input, status: false }
    let newList = ListData.concat( newItem )
    SetListData( newList )
  }

  //function to render list item
  const renderItem = ({item}) => (
   <ListItem item={item} />
  )

  return (
    <View style={styles.container}>
      <View style={ styles.header }>
        <TextInput style={styles.input} onChangeText={ (value) => setInput(value) } />
        <TouchableOpacity 
          style={ (input.length < 3) ? styles.buttonDisabled : styles.button} 
          onPress={ () => addItem() }
          disabled={(input.length < 3) ? true : false }
        >
          <Text style={ styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      
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
  },
  listBackground: {
    backgroundColor: 'white',
  },
  input: {
    padding: 5,
    fontSize: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "white",
    padding: 5,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonDisabled: {
    backgroundColor: "#CCC",
    padding: 5,
    borderWidth: 1,
  }
});
