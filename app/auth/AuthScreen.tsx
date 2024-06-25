import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import { FormAuthScreen } from "./components/FormAuthScreen";
import { mostrarCargando, ocultarCargando } from "../store/splash/splashSlice";
import { ToastError, ToastSuccess } from "../libs/Toast";
import { authApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Storage from "../libs/storage";

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveStorage = async (key: any, value: any) => {
    const stringValue = JSON.stringify(value);
    await Storage.store(key, stringValue);
  };

  const handleLogin = (body: any) => {
    dispatch(mostrarCargando());
    
    authApi
      .post("/login/", body)
      .then(({ data }) => {
        const { AccessToken, RefreshToken, user } = data;
        saveStorage("accessToken", AccessToken);
        saveStorage("refreshToken", RefreshToken);
        saveStorage("user", user);
        dispatch(ocultarCargando());
        ToastSuccess("Ingreso exitoso");
        navigation.reset({
          index: 0,
          routes: [{ name: "core" as never }],
        });
      })
      .catch((err: any) => {
        dispatch(ocultarCargando());
        if (err.response.status == 400)
          return ToastError(err.response.data.message);
        if (err.response.status == 500)
          return ToastError("Server Internal Error(500)");
        if (err.response.status == 0) return ToastError("Error de conexión");
      });
  };

  return (
    <SafeAreaView style={tw`flex-1  rounded-t-2xl`}>
      <ImageBackground
        source={require("../../assets/img/negro.png")}
        style={styles.background}
      >
        <View style={tw`flex-1 relative`}>
          <View style={tw`items-center mt-20`}>
            <Image
              source={require("../../assets/img/morden-logo2.png")}
              style={tw`h-32 w-50`}
            />
          </View>
          <View
            style={[
              tw`absolute bottom-0 left-0 right-0 bg-white  h-[65%]`,
              styles.container,
            ]}
          >
            <FormAuthScreen Ingresar={handleLogin} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    borderTopLeftRadius: 80,
  },
});
