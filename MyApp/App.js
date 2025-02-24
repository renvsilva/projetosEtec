import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './views/Style';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.brasil}>B  R  A  S  I  L!</Text>
      <Image
        style={styles.bandeira}
        source={require("./assets/bandeiragrande.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

