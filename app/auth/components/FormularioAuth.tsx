import { useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import tw from "twrnc";
import * as yup from "yup";

interface Props {
    Ingresar:(body:any)=>void
}

const schema = yup
  .object({
    email: yup.string().required("*Este campo es obligatorio*").email('*Debe ingresar un correo valido*'),
    password: yup.string().required("*Este campo es obligatorio*"),
  })
  .required();

export const FormularioAuth = ({Ingresar}:Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data:any) => {
    const body ={
        ...data,
        email:data.email.toLowerCase()
    }
    Ingresar(body)
  };

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const renderIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    >
      <Ionicons
        name={secureTextEntry ? "eye-off" : "eye"}
        color="#a1a1aa"
        size={24}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={tw`mt-14 `}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              label="Usuario"
              placeholder="Ingrese el usuario"
              status={errors.email?"danger":"basic"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={tw`w-[80%] rounded-lg bg-white focus:border-red-500`}
              size="large"
            />
             {errors.email && <Text style={tw`text-red-500 font-semibold`}>{errors.email.message}</Text>}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={tw`mt-6 mb-14 w-[80%]`}>
            <Input
              label="Contraseña"
              placeholder="***************"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onBlur={onBlur}
              status={errors.password?"danger":"basic"}
              onChangeText={onChange}
              value={value}
              style={tw`rounded-lg bg-white w-full`}
              size="large"
            />
            {errors.password && <Text style={tw`text-red-500 font-semibold`}>{errors.password.message}</Text>}
          </View>
        )}
      />

      <TouchableOpacity
        style={[tw`flex rounded-lg border-0 shadow-md justify-center items-center h-12 `,{backgroundColor:'#FA6419'}]}
        activeOpacity={0.5}
        
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={tw`text-white font-semibold`}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
