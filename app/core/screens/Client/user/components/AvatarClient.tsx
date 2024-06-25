import { Image, Text, View } from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

export const AvatarClient = () => {
  const {contrato} = useSelector((d:RootState)=>d.contratoID)
  return (
    <View style={tw`flex-row mx-3 items-center mt-3`}>
      <View style={tw`shadow-md rounded-full `}>
        <Image
          source={require("../../../../../../assets/img/usuario_(1).png")}
          style={[tw`h-20 w-20 `]}
        />
      </View>
      <View>
        <Text style={tw`ml-4 text-xl font-semibold`}>{contrato?.client_name_name} </Text>
        <Text style={tw`ml-4 text-xl font-semibold`}>{contrato?.client_name_lastname}</Text>
        <Text style={tw`ml-4`}>{contrato?.identification}</Text>
      </View>
    </View>
  );
};
