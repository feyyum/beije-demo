import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';
import { getHeight, getWidth } from '../../constants/Spaces';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.yellow,
    height: getHeight(64),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getWidth(24),
  },
  button_container: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back_button: {
    color: Palette.black_secondary,
    fontSize: 16,
    fontWeight: 500,
  },
});

export default styles;
