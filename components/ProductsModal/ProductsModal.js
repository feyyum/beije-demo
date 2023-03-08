import { useState } from 'react';
import { View, Modal, ScrollView, Pressable, Platform, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ProductsModal.style';
import { resetPad, resetDailyPad, resetTampon } from '../../features/products/productsSlice';
import Button from '../Button/Button';
import Cancel from '../Cancel';
import Cycle from '../Cycle';
import OrderCard from '../OrderCard';
import Text from '../Text';

export default function ProductsModal({ modalVisible, setModalVisible }) {
  const insets = useSafeAreaInsets();

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // This function checks the product list is empty or not
  function isFilled(str) {
    return Object.entries(products[str]).filter((item) => item[1].amount > 0).length > 0;
  }

  // This function makes a string from products name and amounts
  function convertProductArrayToString(arr) {
    const content = [];
    arr.map((item) => {
      content.push(`${item[1].amount} ${item[1].screen_name}`);
    });
    return content.length < 3
      ? content.join(' ve ')
      : content.slice(0, content.length - 1).join(', ') + ' ve ' + content[content.length - 1];
  }

  // This function multiplies amount with price for all items
  function totalPrice(arr) {
    let price = 0;
    arr.map((item) => {
      price += item[1].price * item[1].amount;
    });
    return price.toFixed(2);
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={[
          styles.container,
          Platform.OS === 'ios' && { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <ScrollView style={styles.container}>
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

          <View style={styles.card_container}>
            {isFilled('PAD') && (
              <OrderCard
                title="Ped Paketleri"
                content={convertProductArrayToString(
                  Object.entries(products['PAD']).filter((item) => item[1].amount > 0)
                )}
                onRemove={() => dispatch(resetPad())}
              />
            )}
            {isFilled('DAILYPAD') && (
              <OrderCard
                title="Günlük Ped Paketleri"
                content={convertProductArrayToString(
                  Object.entries(products['DAILYPAD']).filter((item) => item[1].amount > 0)
                )}
                onRemove={() => dispatch(resetDailyPad())}
              />
            )}
            {isFilled('TAMPON') && (
              <OrderCard
                title="Tampon Paketleri"
                content={convertProductArrayToString(
                  Object.entries(products['TAMPON']).filter((item) => item[1].amount > 0)
                )}
                onRemove={() => dispatch(resetTampon())}
              />
            )}
          </View>

          <View style={styles.button_container}>
            <Button
              title={`Sepete Ekle (₺${totalPrice([
                ...Object.entries(products['PAD']).filter((item) => item[1].amount > 0),
                ...Object.entries(products['DAILYPAD']).filter((item) => item[1].amount > 0),
                ...Object.entries(products['TAMPON']).filter((item) => item[1].amount > 0),
              ])})`}
              disabled={!isFilled('PAD') && !isFilled('DAILYPAD') && !isFilled('TAMPON')}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
