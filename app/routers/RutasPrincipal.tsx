import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, View } from "react-native";
import { AuthScreen } from "../auth/screen/AuthScreen";
import { CoreScreen } from "../core/screen/CoreScreen";
import { useTheme } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { useEffect } from "react";
import { CoreRouters } from "../core/routers/CoreRouters";
import { MenuOver } from "../core/components/MenuOver";
import Storage from "../libs/storage";
import { useDispatch } from "react-redux";
import { mostrarCargando, ocultarCargando } from "../store/splash/splashSlice";
import { coreApi } from "../api/CoreApi";
const principal = createStackNavigator();

export const RutasPrincipal = () => {
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
          .catch((error) => console.log(error.response));
      }
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const interv = setInterval(() => {
      // Incrementar el contador en cada intervalo
      refresh();
    }, 540000);
    checkToken();

    return () => {
      clearInterval(interv);
    };
  }, []);

  const theme = useTheme();
  const navigation = useNavigation();

  const checkToken = async () => {
    dispatch(mostrarCargando());
    try {
      const token = await Storage.get("accessToken");
      if (token) {
        navigation.reset({
          index: 0,
          routes: [{ name: "core" as never }],
        });
      }
      dispatch(ocultarCargando());
    } catch (error) {
      console.error("Error al obtener el token del almacenamiento:", error);
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
          marginLeft: 90,
        }}
        source={require("../../assets/img/morden-logo2.png")}
      />
    );
  };

  const CustomHeaderLeft = () => {
    return (
      <View style={tw`ml-5`}>
        <MenuOver />
      </View>
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
          component={CoreScreen}
          options={{
            headerTitle: (props) => <LogoTitle />,
            headerLeft: () => <CustomHeaderLeft />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("auth" as never)} // Navegar a la pantalla de configuración
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color="white"
                  style={tw`mr-2`}
                />
              </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: theme["color-primary-500"] },
            headerShadowVisible: false,
          }}
        />
        <principal.Screen
          name="client"
          component={CoreRouters}
          options={{
            headerTitle: (props) => <Text></Text>,
            headerTintColor: "white",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("auth" as never)} // Navegar a la pantalla de configuración
                style={{ marginRight: 10 }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color="white"
                  style={tw`mr-2`}
                />
              </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: theme["color-primary-500"] },
            headerShadowVisible: false,
          }}
        />
      </principal.Navigator>
    </>
  );
};
