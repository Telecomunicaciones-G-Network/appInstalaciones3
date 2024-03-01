import { Spinner } from "@ui-kitten/components";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import tw from "twrnc";

export const Cargando = () => {
  return (
    <View style={tw`flex justify-center items-center `}>
      <Progress.Circle animated={true} size={50} borderWidth={3} indeterminate={true} />
    </View>
  );
};
