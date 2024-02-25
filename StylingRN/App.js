import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text>LightBlue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>LightGreen box</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue'
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen'
  }
})