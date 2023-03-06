import { View, ScrollView } from 'react-native';

import styles from './Home.style';
import Text from '../../components/Text';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content_container}>
        <Text style={styles.title}>Kendi Paketini Oluştur</Text>
        <Text style={styles.desc}>
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir
          paket oluşturalım.
        </Text>
      </View>
    </ScrollView>
  );
}
