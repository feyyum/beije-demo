import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // Header mode must be screen for custom navigation usage
        headerMode: 'screen',
        header: ({ navigation, route, options, back }) => {
          // Custom Header with default params
          return <Header navigation={navigation} route={route} options={options} back={back} />;
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MainStack;
