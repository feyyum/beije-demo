import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { Palette } from './constants/Colors';
import MainStack from './navigators/MainStack';
import store from './store';

export default function App() {
  /*
    This part fetching fonts from assets, and then hiding splash screen
  */
  const [fontsLoaded] = useFonts({
    'Gordita-Regular': require('./assets/fonts/GorditaRegular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.yellow,
  },
});
