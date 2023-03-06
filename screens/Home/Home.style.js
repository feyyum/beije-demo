import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';
import { getHeight, getWidth } from '../../constants/Spaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.yellow,
    paddingHorizontal: getWidth(24),
  },
  content_container: {
    paddingVertical: getHeight(32),
  },
  title: {
    fontSize: 28,
    lineHeight: 36.4,
    fontWeight: 500,
    color: Palette.black_secondary,
    marginBottom: getHeight(24),
  },
  desc: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 300,
  },
});

export default styles;