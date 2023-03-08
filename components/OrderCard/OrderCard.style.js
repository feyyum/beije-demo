import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Palette.white,
    borderRadius: 8,
    shadowColor: Palette.gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontFamily: 'Gordita-Medium',
    fontSize: 18,
    lineHeight: 27,
    color: Palette.black_secondary,
  },
  content: {
    fontSize: 14,
    color: Palette.black_secondary,
    lineHeight: 18,
    marginVertical: 12,
  },
  button_container: {
    alignSelf: 'flex-start',
  },
  button: {
    fontFamily: 'Gordita-Medium',
    fontSize: 14,
    lineHeight: 22,
    color: Palette.black_secondary,
    paddingVertical: 8,
  },
});

export default styles;
