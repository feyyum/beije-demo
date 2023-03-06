import { Text as TextNative } from 'react-native';

import { Palette } from '../../constants/Colors';

export default function Text(props) {
  return (
    <TextNative
      style={{
        fontFamily: 'Gordita-Regular',
        color: Palette.black,
        ...props.style,
      }}
      {...props}
    >
      {props.children}
    </TextNative>
  );
}
