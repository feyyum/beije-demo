import Svg, { Path } from 'react-native-svg';

const Cancel = (props) => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path d="M18 6 6 18M6 6l12 12" stroke="#343131" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Cancel;
