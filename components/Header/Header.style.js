import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';
import { getHeight, getWidth } from '../../constants/Spaces';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.yellow,
    flexDirection: 'row',
    height: getHeight(64),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(24),
  },
  basket_container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 4,
  },
  basket_count_container: {
    position: 'absolute',
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.green,
    borderRadius: 8,
    marginTop: -12,
  },
  basket_count_text: {
    fontSize: 8,
    paddingLeft: 1,
    paddingTop: 1,
    color: Palette.white,
  },
});

export default styles;
