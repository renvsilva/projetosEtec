import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>B  R  A  S  I  L!</Text>
      <Image
        style={styles.tinyLogo}
        source={require("./assets/bandeiragrande.jpg")}
      />
      <StatusBar style="auto" />
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
  text: {
    color: "#ffcb00",
    backgroundColor: "#009440",
  },
  tinyLogo: {
    width: 400,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
