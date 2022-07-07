import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import { useState, useRef, useEffect } from 'react'
import { ListItem } from './components/ListItem';
import { ListSeparator } from './components/ListSeparator';
import { ListEmpty } from './components/ListEmpty';
import { ListFooter } from './components/ListFooter';


export default function App() {
  
  // useEffect Hook
  

  // application states
  const [ListData, SetListData] = useState([])
  const [input,setInput] = useState('')

  //reference to Textinput
  const txtInput = useRef()

  useEffect( () => console.log("updating"), [ListData] )

  // function to add value of input to ListData (add an item to list)
  const addItem = () => {
    // use timestamp to create unique id
    let newId = new Date().getTime()
    let newItem = { id: newId, name: input, status: false }
    let newList = ListData.concat( newItem )
    SetListData( newList )
    txtInput.current.clear()
  }

  const deleteItem = ( itemId ) => {
    // find the item id
    // remove item with the id from array (ListData)
    const newList = ListData.filter( (item) => {
      if( item.id !== itemId ) {
        return item
      }
    })
    // setListData( new array )
    SetListData( newList )
  }

  //function to render list item
  const renderItem = ({item}) => (
   <ListItem item={item} remove={ deleteItem } />
  )

  

  return (
    <View style={styles.container}>
      <View style={ styles.header }>
        <TextInput 
          style={styles.input} 
          onChangeText={ (value) => setInput(value) } 
          ref={txtInput} 
        />
        <TouchableOpacity 
          style={ (input.length < 3) ? styles.buttonDisabled : styles.button} 
          onPress={ () => addItem() }
          disabled={(input.length < 3) ? true : false }
        >
          <Text style={ (input.length < 3) ? styles.buttonTextDisabled : styles.buttonText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      
      <FlatList 
        data={ListData} 
        keyExtractor={ (item) => item.id }
        renderItem={renderItem}
        ItemSeparatorComponent={ ListSeparator }
        ListEmptyComponent={ ListEmpty }
        ListFooterComponent={ <ListFooter text="End of List" />}
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
    color: 'black',
  },
  buttonDisabled: {
    backgroundColor: "#CCC",
    padding: 5,
    borderWidth: 1,
  },
  buttonTextDisabled: {
    fontSize: 20,
    color: 'white',
  },
});
