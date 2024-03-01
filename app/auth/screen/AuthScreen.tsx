import { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

import { SafeAreaView } from "react-native-safe-area-context";
import { FormularioAuth } from "../components/FormularioAuth";
import { useNavigation } from "@react-navigation/native";
import { authApi } from "../../api/AuthApi";
import { ToastError, ToastSuccess } from "../../libs/Toast";
import Storage from "../../libs/storage";

export const AuthScreen = () => {
  // onPress={() =>
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "core" as never }],
  //   })
  // }
  const navigation = useNavigation();

  const saveStorage = async (key: any, value: any) => {
    const stringValue = JSON.stringify(value);
    await Storage.store(key, stringValue);
  };

  const handleLogin = (body: any) => {
    authApi
      .post("/login/", body)
      .then(({ data }) => {
        const { AccessToken, RefreshToken, user } = data;
        saveStorage("accessToken", AccessToken);
        saveStorage("refreshToken", RefreshToken);
        saveStorage("user", user);
        ToastSuccess('Ingreso exitoso')
        navigation.reset({
          index: 0,
          routes: [{ name: "core" as never }],
        });
      })
      .catch((err) => {
        
        if (err.response.status == 400)
          return ToastError(err.response.data.message);
        if (err.response.status == 500)
          return ToastError("Server Internal Error(500)");
        if (err.response.status == 0) return ToastError("Error de conexion");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View>
          <Image
            source={require("../../../assets/img/g3.png")}
            style={tw`h-12 w-72`}
          />
        </View>
        <FormularioAuth Ingresar={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  },
});
