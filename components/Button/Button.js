import { View, Pressable } from 'react-native';

import styles from './Button.style';
import Text from '../Text';

export default function Button({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title ? title : 'Button'}</Text>
    </Pressable>
  );
}
