import { TouchableOpacity, Text, StyleSheet  } from "react-native"
import { useState } from "react"

export function MyButton ( props ) {
  const[ click, setClick ] = useState(0)

  return(
    <TouchableOpacity style={ styles.button } onPress={ () => { setClick( click + 1 ) } }>
      <Text style={styles.buttonText} >Received {click} clicks</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 10,
  },
  buttonText: {
    color: "white"
  }
})