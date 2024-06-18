import { View, StyleSheet, Image } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormularioAuth } from "../components/FormularioAuth";
import { useNavigation } from "@react-navigation/native";
import { authApi } from "../../api/AuthApi";
import { ToastError, ToastSuccess } from "../../libs/Toast";
import Storage from "../../libs/storage";
import { useDispatch } from "react-redux";
import {
  mostrarCargando,
  ocultarCargando,
} from "../../store/splash/splashSlice";

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
      .catch((err) => {
        dispatch(ocultarCargando());
        if (err.response.status == 400)
          return ToastError(err.response.data.message);
        if (err.response.status == 500)
          return ToastError("Server Internal Error(500)");
        if (err.response.status == 0) return ToastError("Error de conexion");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          tw`flex-1 justify-center items-center`,
          { backgroundColor: "#6C6C6C" },
        ]}
      >
        <View>
          <Image
            source={require("../../../assets/img/morden-logo2.png")}
            style={tw`h-52 w-80`}
          />
        </View>
        <FormularioAuth Ingresar={handleLogin} />
      </View>
    </SafeAreaView>
  );
};
