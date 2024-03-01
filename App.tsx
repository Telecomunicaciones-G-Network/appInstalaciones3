import 'react-native-gesture-handler';
import { ApplicationProvider} from "@ui-kitten/components";
import { NavigationContainer } from '@react-navigation/native';
import * as eva from "@eva-design/eva";


import { useState } from "react";
import { RutasPrincipal } from './app/routers/RutasPrincipal';
import Toast from 'react-native-toast-message';
import {default as theme} from './custom-theme.json'
import { Splash } from './app/helpers/Splash';
import { Provider } from 'react-redux';
import { store } from './app/store/store';




export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light,...theme}}>
      <Provider store={store}>
       <NavigationContainer onReady={()=><Splash/>}>
        <RutasPrincipal/>
        <Splash/>
        <Toast />
       </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}

