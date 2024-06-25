import { ImageBackground, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { theme } from "../../../../../App";
import AntDesign from "@expo/vector-icons/AntDesign";

export const CardOrden = ({order}:{order:any}) => {
  
  
  return (
    <View
      style={[
        tw`h-25 flex-row justify-between items-center rounded-2xl p-4 shadow-xl`,
        { backgroundColor: theme.colors.accent },
      ]}
    >
      <Text style={tw`text-white font-semibold text-3xl ml-5`}>{order.order}</Text>
      <View style={tw`mr-3`}>
        <AntDesign name="filetext1" size={40} color={theme.colors.default} />
      </View>
    </View>
  );
};


