import { useTheme } from "@ui-kitten/components";
import { Text, View } from "react-native";
import tw from "twrnc";
import { stylesGlobal } from "../../style/styleGlobal";
import { Ionicons } from "@expo/vector-icons";

export const HeadersCore = () => {
  const theme = useTheme();
  return (
    <>
    <View
      style={[
        tw`flex-row justify-between items-start pt-7 px-2`,
        { backgroundColor: theme["color-primary-500"] },
      ]}
    >
      <Text style={[tw`text-white font-semibold text-2xl`, stylesGlobal.Title]}>
        Finalizado
      </Text>
      {/* <Text style={[tw`text-white font-semibold text-xl `, stylesGlobal.Title]}>
        Finalizado
      </Text> */}
    </View>
    <View style={[
        tw`flex-row-reverse  h-10 pt-3`,
        { backgroundColor: theme["color-primary-500"] },
      ]}>
        <Text style={tw`text-white`}>
          Desde: 20-12-2022, hasta: 20-12-2022
        </Text>
      </View>
    </>
  );
};
