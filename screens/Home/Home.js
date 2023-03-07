import { View, ScrollView, Button, Platform } from 'react-native';

import styles from './Home.style';
import ProductTabView from '../../components/ProductTabView';
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
      <View style={{ height: Platform.OS === 'ios' ? 520 : 448 }}>
        <ProductTabView />
      </View>
    </ScrollView>
  );
}
