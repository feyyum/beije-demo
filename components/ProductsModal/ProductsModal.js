import { View, Modal, ScrollView, Pressable, Platform, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './ProductsModal.style';
import Cancel from '../Cancel';
import Cycle from '../Cycle';
import Text from '../Text';

export default function ProductsModal({ modalVisible, setModalVisible }) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <ScrollView
        style={[
          styles.container,
          Platform.OS === 'ios' && { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.header_title}>Özel Paketin</Text>
          <Pressable hitSlop={24} onPress={() => setModalVisible(!modalVisible)}>
            <Cancel />
          </Pressable>
        </View>

        <View style={styles.frequency_container}>
          <Cycle />
          <Text style={styles.frequency_text}>2 ayda 1 gönderim</Text>
        </View>

        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/packet.png')}
            contentFit="cover"
            transition={1000}
          />
        </View>
      </ScrollView>
    </Modal>
  );
}
