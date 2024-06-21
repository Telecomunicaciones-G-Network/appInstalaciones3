import { useState } from "react";
import { Text, View } from "react-native";
import { Button, HelperText, Icon, TextInput } from "react-native-paper";

import tw from "twrnc";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../../App";

interface Props {
  Ingresar: (body: any) => void;
}

const schema = yup
  .object({
    email: yup.string().required("*Este campo es obligatorio*"),
    password: yup.string().required("*Este campo es obligatorio*"),
  })
  .required();

export const FormAuthScreen = ({ Ingresar }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }: any) => {
    const body = {
      password,
      email: `${email.toLowerCase().trim()}@gnetworkve.com`,
    };
    Ingresar(body);
  };

  return (
    <View style={tw`h-full justify-center items-center mx-6 mt-[-55]`}>
      <Text style={tw`text-2xl mx-auto pt-15 mb-2`}>Ingresar</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={tw`w-full`}>
            <TextInput
              label="Usuario"
              mode="outlined"
              value={value}
              onBlur={onBlur}
              right={<TextInput.Affix text="@gnetworkve.com" />}
              onChangeText={onChange}
              error={!!errors.email}
            />

            <HelperText type="error" visible={!!errors.email}>
              {errors.email && errors.email.message}
            </HelperText>
          </View>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={tw`my-4 w-full`}>
            <TextInput
              label="Contraseña"
              value={value}
              mode="outlined"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              error={!!errors.password}
              onChangeText={onChange}
              placeholder="***********"
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={() => setShowPassword(!showPassword)}
                  color={theme.colors.primary}
                />
              }
            />
            <HelperText type="error" visible={!!errors.password}>
              *Este campo es obligatorio*
            </HelperText>
          </View>
        )}
      />

      <Button
        icon="login"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={tw`w-full rounded-lg`}
      >
        Ingresar
      </Button>
    </View>
  );
};
