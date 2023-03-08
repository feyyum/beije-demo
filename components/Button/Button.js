import { Pressable } from 'react-native';

import styles from './Button.style';
import Text from '../Text';

export default function Button({ title, onPress, disabled }) {
  return (
    <Pressable
      style={[styles.container, disabled && styles.disabled_button]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title ? title : 'Button'}</Text>
    </Pressable>
  );
}
