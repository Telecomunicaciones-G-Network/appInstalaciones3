import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { RutasPrincipal } from "./app/routers/RutasPrincipal";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { Cargando } from "./app/components/Cargando";


export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#e61919", // Color primario
    accent: "#262626", // Color de acento
    secondary:'#9ca3af',
    success:'#2ECC71',
    default: '#f5f5f5', // Color de fondo
    // surface: '#ffffff', // Color de superficie
    // text: '#333333', // Color del texto
    // placeholder: '#aaaaaa', // Color del placeholder
    // disabled: '#cccccc', // Color de componentes deshabilitados
    // notification: '#ff0000', // Color de notificaciones
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer onReady={() => <Cargando />}>
          <RutasPrincipal />
          <Cargando />
          <Toast />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
