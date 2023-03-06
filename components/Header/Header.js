import { Pressable, View } from 'react-native';

import styles from './Header.style';
import Basket from '../Basket';
import Logo from '../Logo';
import Text from '../Text';

export default function Header({ navigation, route, options = {}, back }) {
  return (
    <View style={[styles.container, options.headerStyle]}>
      <Logo />
      <View style={styles.button_container}>
        {/* Row is reversed. Basket is last element of line. */}
        <Pressable hitSlop={18} onPress={() => console.log('Merhaba')}>
          <Basket style={styles.basket_logo} />
        </Pressable>
        {back && (
          <Pressable hitSlop={18} onPress={() => navigation.goBack}>
            <Text style={styles.back_button}>Geri</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
