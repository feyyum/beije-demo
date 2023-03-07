import { Text as TextNative } from 'react-native';

import { Palette } from '../../constants/Colors';

export default function Text({ style, children, ...props }) {
  return (
    <TextNative
      style={{
        fontFamily: 'Gordita-Regular',
        color: Palette.black,
        ...style,
      }}
      {...props}
    >
      {children}
    </TextNative>
  );
}
