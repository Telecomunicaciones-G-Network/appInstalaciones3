import { ScrollView, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../../../../App";
import tw from 'twrnc';
import { DetailRed } from "./components/DetailRed";

export const RedClient = () => {
  return (
    <ScrollView>
    <View style={[tw`px-2`,{ flex: 1, backgroundColor: theme.colors.default }]}>
      <View style={tw`items-center pt-7`}>
        <MaterialCommunityIcons name="access-point-network" size={150} color="black" />
        
      </View>

      <View style={tw`flex-1 mt-7`}>
        <DetailRed/>
      </View>
      
    </View>
    </ScrollView>
  );
};
