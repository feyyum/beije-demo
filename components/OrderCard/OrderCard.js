import { TouchableOpacity, View } from 'react-native';

import styles from './OrderCard.style';
import Text from '../Text';

export default function OrderCard({
  title = 'Başlık',
  content = 'Merhaba',
  onRemove = () => null,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.button_container}>
        <Text style={styles.button}>Paketten Çıkar</Text>
      </TouchableOpacity>
    </View>
  );
}
