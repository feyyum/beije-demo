import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './Home.style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
