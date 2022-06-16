import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MyComponent } from './components/MyComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there! It's our first app!</Text>
      <StatusBar style="auto" />
      <MyComponent text="Make me a sandwich!" color="red" size={32} />
      <MyComponent text="I like donuts!" color="green" size={18} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
