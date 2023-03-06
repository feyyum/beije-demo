import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Palette } from './constants/Colors';
import MainStack from './navigators/MainStack';

export default function App() {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.yellow }} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
