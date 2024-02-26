import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Header } from './src/components/Header/Header';
import { styles } from './src/styles/main';


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>Tan Le</Text>
      <StatusBar style="auto" />
    </View>
  );
}
