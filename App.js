import React from 'react';
import Navigation from './src/navigation/Navigation';
import {
  useFonts,
  PlayfairDisplay_400Regular
} from "@expo-google-fonts/playfair-display";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Splash from './src/screens/splash/Splash';

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    Poppins_400Regular
  });

if (!fontsLoaded) {
    return <Splash />;
}
  return (
    <Navigation />
  )
}

