import 'react-native-gesture-handler';
import * as React from 'react';
import Navigator from "./src/navigation/Navigator";
import {AppLoading} from "expo";
import {
  Inter_400Regular,
  Inter_900Black,
  useFonts
} from "@expo-google-fonts/inter";
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Navigator/>
  );
}
