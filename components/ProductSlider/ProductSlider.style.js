import { StyleSheet } from 'react-native';

import { Palette } from '../../constants/Colors';

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 300,
    color: Palette.black,
  },
  count: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 300,
    color: Palette.black,
  },
  slider: {
    width: '100%',
  },
  limit_container: {
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  limit: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 300,
    color: Palette.black,
  },
});

export default styles;
