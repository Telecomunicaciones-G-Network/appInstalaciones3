import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

export const NoHayNada = () => {
  return (
    <View style={tw`flex-1  items-center`}>
      <Ionicons
        name="close-circle-outline"
        style={tw`text-gray-400 mt-2`}
        size={50}
      />
      <Text style={tw`text-lg text-gray-400 font-semibold`}>
        No hay nada para mostrar
      </Text>
    </View>
  );
};
