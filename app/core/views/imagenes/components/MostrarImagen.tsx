import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@ui-kitten/components";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";

export const MostrarImagen = () => {
  const theme = useTheme();
  const w = theme["color-warning-500"];
  const d = theme["color-danger-500"];

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={[
          tw`flex justify-center items-center  rounded-md border-2 border-gray-300 border-dashed`,
          { flexBasis: 280 },
        ]}
      >
        <Text>No hay nada para mostrar</Text>
      </View>
      <View
        style={[tw`flex justify-center items-center pl-3`, { flexBasis: 40 }]}
      >
        <TouchableOpacity activeOpacity={0.5} style={tw`mb-7`}>
          <Ionicons name="pencil" size={26} style={{ color: w }} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={tw``}>
          <Ionicons name="trash" size={26} style={{ color: d }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
