import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';
import { getHeight, getWidth } from '../../constants/Spaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.yellow,
  },
  header: {
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(24),
  },
  header_title: {
    fontFamily: 'Gordita-Medium',
    fontSize: 22,
    lineHeight: 32,
    color: Palette.black_secondary,
  },
  frequency_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: getWidth(24),
    marginVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Palette.white,
    borderRadius: 8,
    paddingVertical: 12,
    shadowColor: Palette.gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  frequency_text: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  image_container: {
    marginHorizontal: getWidth(24),
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    flex: 1,
  },
});

export default styles;
