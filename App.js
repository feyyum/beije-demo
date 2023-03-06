import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './navigators/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
