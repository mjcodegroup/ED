import React from 'react';
import { StatusBar } from 'react-native';
import Routes from "./src/routes";
import { useFonts } from '@use-expo/font';


import {AppLoading} from "expo";

export default function App() {

    const [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic':'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    })

  if(!fontsLoaded){
        return <AppLoading/>
  }

  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        <Routes/>
      </>
  );
}
