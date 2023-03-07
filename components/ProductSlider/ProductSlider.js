import Slider from '@react-native-community/slider';
import { View } from 'react-native';

import styles from './ProductSlider.style';
import { Palette } from '../../constants/Colors';
import Text from '../Text';

export default function ProductSlider({
  title,
  type,
  count = 0,
  setFunc,
  dispatch,
  maximum,
  step = 10,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={maximum}
        step={step}
        tapToSeek
        thumbTintColor={Palette.black_secondary}
        minimumTrackTintColor={Palette.black_secondary}
        maximumTrackTintColor="#000000"
        onValueChange={(value) => dispatch(setFunc({ type, amount: value }))}
      />
      <View style={styles.limit_container}>
        <Text style={styles.limit}>0</Text>
        <Text style={styles.limit}>{maximum}</Text>
      </View>
    </View>
  );
}
