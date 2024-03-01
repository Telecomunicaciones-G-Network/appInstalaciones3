import { Spinner, useTheme } from "@ui-kitten/components";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import tw from "twrnc";

export const Cargando = () => {
  const theme = useTheme();
  const s = theme["color-info-500"];
  return (
    <View style={tw`flex justify-center items-center `}>
      <Progress.Circle animated={true} size={50} color={s} borderWidth={3} indeterminate={true} />
    </View>
  );
};
