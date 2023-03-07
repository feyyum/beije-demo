import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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
    'Gordita-Regular-Italic': require('./assets/fonts/GorditaRegularItalic.otf'),
    'Gordita-Black': require('./assets/fonts/GorditaBlack.otf'),
    'Gordita-Black-Italic': require('./assets/fonts/GorditaBlackItalic.otf'),
    'Gordita-Bold': require('./assets/fonts/GorditaBold.otf'),
    'Gordita-Bold-Italic': require('./assets/fonts/GorditaBoldItalic.otf'),
    'Gordita-Light': require('./assets/fonts/GorditaLight.otf'),
    'Gordita-Light-Italic': require('./assets/fonts/GorditaLightItalic.otf'),
    'Gordita-Medium': require('./assets/fonts/GorditaMedium.otf'),
    'Gordita-Medium-Italic': require('./assets/fonts/GorditaMediumItalic.otf'),
    'Gordita-Thin': require('./assets/fonts/GorditaThin.otf'),
    'Gordita-Thin-Italic': require('./assets/fonts/GorditaThinItalic.otf'),
    'Gordita-Ultra': require('./assets/fonts/GorditaUltra.otf'),
    'Gordita-Ultra-Italic': require('./assets/fonts/GorditaUltraItalic.otf'),
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
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style="dark" />
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.yellow,
  },
});
