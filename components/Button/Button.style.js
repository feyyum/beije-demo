import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 64,
    backgroundColor: Palette.black_secondary,
  },
  title: {
    fontFamily: 'Gordita-Medium',
    color: Palette.white,
    textAlign: 'center',
    paddingVertical: 10,
    lineHeight: 24,
  },

  disabled_button: {
    backgroundColor: Palette.gray,
  },
});

export default styles;
