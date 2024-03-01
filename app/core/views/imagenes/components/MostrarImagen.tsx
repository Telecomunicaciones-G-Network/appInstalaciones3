import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@ui-kitten/components";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";

export const MostrarImagen = ({img}:{img:any}) => {
  console.log(img);
  
  const theme = useTheme();
  const w = theme["color-warning-500"];
  const d = theme["color-danger-500"];

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={[
          tw`flex justify-center h-55 w-70 items-center  rounded-md border-2 border-gray-300 border-dashed`,
          { flexBasis: 280 },
        ]}
      >
        <Image  source={{uri:img}} style={tw`h-57 w-72`}/>
      </View>
      <View
        style={[tw`flex justify-center h-56 w-68 items-center pl-3`, { flexBasis: 40 }]}
      >
        <TouchableOpacity activeOpacity={0.5} style={tw`mb-7`}>
          <Ionicons name="pencil" size={26} style={{ color: w }} />
        </TouchableOpacity>
        {/* <TouchableOpacity activeOpacity={0.5} style={tw``}>
          <Ionicons name="trash" size={26} style={{ color: d }} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
