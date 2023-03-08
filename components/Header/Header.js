import { Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './Header.style';
import Basket from '../Basket';
import Logo from '../Logo';
import Text from '../Text';

export default function Header({ navigation, route, options = {}, back }) {
  const basket_count = useSelector((state) => state.basket.count);

  return (
    <View style={[styles.container, options.headerStyle]}>
      <Logo />
      <Pressable hitSlop={18} style={styles.basket_container}>
        <Basket style={styles.basket_logo} />
        {basket_count !== 0 && (
          <View style={styles.basket_count_container}>
            <Text style={styles.basket_count_text}>{basket_count < 10 ? basket_count : ':)'}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}
