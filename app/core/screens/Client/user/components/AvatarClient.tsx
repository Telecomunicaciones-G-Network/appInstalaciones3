import { Image, Text, View } from "react-native";
import tw from "twrnc";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const AvatarClient = () => {
  return (
    <View style={tw`flex-row mx-3 items-center mt-3`}>
      <View style={tw`shadow-md rounded-full `}>
        <Image
          source={require("../../../../../../assets/img/usuario_(1).png")}
          style={[tw`h-20 w-20 `]}
        />
      </View>
      <View>
        <Text style={tw`ml-4 text-xl font-semibold`}>Cristiano Ronaldo </Text>
        <Text style={tw`ml-4 text-xl font-semibold`}>de aveiro dos santos</Text>
        <Text style={tw`ml-4`}>AvatarClient</Text>
      </View>
    </View>
  );
};
