import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import tw from "twrnc";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const ImageScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("Imagen" as never);
  };
  return (
    <View
      style={[
        tw`px-2`,
        { flex: 1, justifyContent: "center", alignContent: "center" },
      ]}
    >
      <View style={tw`bg-white rounded-xl shadow-md p-3 mb-4`}>
        {/* <Image
          source={require("../../../../assets/img/PLANTILLA_PROMOCION.png")}
          style={tw`h-120 w-80`}
        /> */}
        <NoImage/>
      </View>
      <Button mode="contained" onPress={handleNavigation} style={tw`rounded-lg`}>
        Volver
      </Button>
    </View>
  );
};

const NoImage=()=>{
  return (
    <View style={tw`h-120 w-80 justify-center items-center`}>
      <FontAwesome6 name="image" size={60} color="#6b7280" />
      <Text style={tw`text-xl text-gray-500`}>Inserte una imagen</Text>
    </View>
  )
}