import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { useEffect } from "react";
import Storage from "../libs/storage";
import { useDispatch } from "react-redux";
import { mostrarCargando, ocultarCargando } from "../store/splash/splashSlice";
import { coreApi } from "../api/CoreApi";
import { AuthScreen } from "../auth/AuthScreen";
import { theme } from "../../App";
import { CoreRouters } from "../core/routers/CoreRouters";
import { ClientScreen } from "../core/screens/Client/ClientScreen";
import { MyLocation } from "../core/components/MyLocation";
import { ImageScreen } from "../core/screens/image/ImageScreen";
import { OptionScreen } from "../core/screens/options/OptionScreen";

const principal = createStackNavigator();

export const RutasPrincipal = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const saveStorage = async (key: any, value: any) => {
    const stringValue = JSON.stringify(value);
    await Storage.store(key, stringValue);
  };

  const refresh = async () => {
    Storage.get("refreshToken").then((d) => {
      if (d) {
        coreApi
          .post("/refresh/", { refresh: JSON.parse(d) })
          .then(({ data }) => {
            const { AccessToken, RefreshToken, user } = data;
            saveStorage("accessToken", AccessToken);
            saveStorage("refreshToken", RefreshToken);
          })
          .catch((error) => {
            if (error.response.status == 401) {
              Storage.remove("accessToken");
              Storage.remove("refreshToken");
              Storage.remove("user");
              navigation.reset({
                index: 0,
                routes: [{ name: "auth" as never }],
              });
            }
            console.log(error.response);
          });
      }
    });
  };

  useEffect(() => {
    const interv = setInterval(() => {
      // Incrementar el contador en cada intervalo
      refresh();
    }, 50000);
    checkToken();

    return () => {
      clearInterval(interv);
    };
  }, []);

  const checkToken = async () => {
    dispatch(mostrarCargando());
    try {
      const token = await Storage.get("accessToken");
      if (token) {
        navigation.reset({
          index: 0,
          routes: [{ name: "option" as never }],
        });
      }
      dispatch(ocultarCargando());
    } catch (error) {
      console.error("Error al obtener el token del almacenamiento:", error);
      Storage.remove("accessToken");
      Storage.remove("refreshToken");
      Storage.remove("user");
      navigation.reset({
        index: 0,
        routes: [{ name: "auth" as never }],
      });
      dispatch(ocultarCargando());
    }
  };

  const LogoTitle = () => {
    return (
      <Image
        // style={{ width: 130, height: 22 }}
        style={{
          width: 100,
          height: 40,
          resizeMode: "contain",
        }}
        source={require("../../assets/img/morden-logo2.png")}
      />
    );
  };

  return (
    <>
      <principal.Navigator>
        <principal.Screen
          name="auth"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <principal.Screen
          name="core"
          component={CoreRouters}
          options={{
            headerTitle: (props) => (
              <>
                <Text style={[tw`text-xl `]}>Grupo 1</Text>
              </>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  Storage.remove("accessToken");
                  Storage.remove("refreshToken");
                  Storage.remove("user");
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "auth" as never }],
                  });
                }} // Navegar a la pantalla de configuración
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color={theme.colors.primary}
                  style={tw`mr-2`}
                />
              </TouchableOpacity>
            ),

            headerStyle: { backgroundColor: theme.colors.default },
            headerShadowVisible: false,
          }}
        />
        <principal.Screen
          name="client"
          component={ClientScreen}
          options={{
            headerTitle: (props) => <MyLocation />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  Storage.remove("accessToken");
                  Storage.remove("refreshToken");
                  Storage.remove("user");
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "auth" as never }],
                  });
                }} // Navegar a la pantalla de configuración
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color={theme.colors.primary}
                  style={tw`mr-2`}
                />
              </TouchableOpacity>
            ),

            headerStyle: { backgroundColor: theme.colors.default },
            headerShadowVisible: false,
          }}
        />
        <principal.Screen
          name="option"
          component={OptionScreen}
          options={{
            // headerTitle: (props) =><> </>,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  Storage.remove("accessToken");
                  Storage.remove("refreshToken");
                  Storage.remove("user");
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "auth" as never }],
                  });
                }} // Navegar a la pantalla de configuración
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color={theme.colors.primary}
                  style={tw`mr-2`}
                />
              </TouchableOpacity>
            ),

            
            headerShadowVisible: false,
          }}
        />
        <principal.Group screenOptions={{ presentation: "card" }}>
          <principal.Screen name="image" component={ImageScreen} />
        </principal.Group>
      </principal.Navigator>
    </>
  );
};
