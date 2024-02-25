import { View, Text, Button, Alert } from "react-native";
import Greet from "./components/Greet";

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Greet name="Hieu Doan"/>
      <Greet name="Doan Hieu"/>
    </View>
  )
}