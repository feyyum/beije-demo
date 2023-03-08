import { useState } from 'react';
import { View, ScrollView, Platform } from 'react-native';

import styles from './Home.style';
import Button from '../../components/Button';
import ProductTabView from '../../components/ProductTabView';
import ProductsModal from '../../components/ProductsModal';
import Text from '../../components/Text';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <ProductsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.content_container}>
        <Text style={styles.title}>Kendi Paketini Oluştur</Text>
        <Text style={styles.desc}>
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir
          paket oluşturalım.
        </Text>
      </View>
      <View style={{ height: Platform.OS === 'ios' ? 520 : 468 }}>
        <ProductTabView />
      </View>
      <View style={styles.button_container}>
        <Button title="Paketini Gör" onPress={() => setModalVisible(!modalVisible)} />
      </View>
    </ScrollView>
  );
}
