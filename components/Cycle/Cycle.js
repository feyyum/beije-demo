import Svg, { Path } from 'react-native-svg';

const Cycle = (props) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    {...props}
  >
    <Path
      d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
      stroke="#343131"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Cycle;
