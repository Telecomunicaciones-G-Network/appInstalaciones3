import { useTheme } from "@ui-kitten/components";
import { Text, View } from "react-native";
import tw from "twrnc";
import { stylesGlobal } from "../../style/styleGlobal";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";
import { useMemo } from "react";

export const HeadersCore = () => {
  const { desde, hasta, type } = useSelector((d: SelectorInterface) => d.core);
  console.log("====================================");
  console.log(type);
  console.log("====================================");
  const theme = useTheme();

  const title = useMemo(() => {
    switch (type) {
      case 41:
        return "NO FINALIZADO";
        break;
      case 42:
        return "FINALIZADO";
        break;

      default:
        return "TODOS";
    }
  }, [type]);

  return (
    <>
      <View
        style={[
          tw`flex-row justify-between items-start pt-7 px-2`,
          { backgroundColor: theme["color-primary-500"] },
        ]}
      >
        <Text
          style={[tw`text-white font-semibold text-2xl`, stylesGlobal.Title]}
        >
          {title}
        </Text>
        {/* <Text style={[tw`text-white font-semibold text-xl `, stylesGlobal.Title]}>
        Finalizado
      </Text> */}
      </View>
      <View
        style={[
          tw`flex-row-reverse  h-10 pt-3`,
          { backgroundColor: theme["color-primary-500"] },
        ]}
      >
        <Text style={tw`text-white`}>
          Desde: {desde}, hasta: {hasta}
        </Text>
      </View>
    </>
  );
};
