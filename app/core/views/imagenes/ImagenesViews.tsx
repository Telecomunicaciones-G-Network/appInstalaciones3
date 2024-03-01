import { useTheme } from "@ui-kitten/components";
import { Text, View } from "react-native";
import tw from "twrnc";
import { CardImagenes } from "./components/CardImagenes";
import { ScrollView } from "react-native-gesture-handler";

export const ImagenesViews = () => {
  const theme = useTheme();
  return (
    <ScrollView>
      <View
        style={[tw`h-24`, { backgroundColor: theme["color-primary-500"] }]}
      />
      <View style={tw`p-3 mt-[-60px]`}>
        <Text style={tw`text-white font-semibold text-2xl`}>Imagenes</Text>
      </View>
      <View style={tw`flex justify-center  mt-5 pb-10`}>
        <CardImagenes title="Caja Abierta"/>
        <CardImagenes title="Caja Cerrada"/>
        <CardImagenes title="Midiendo potencia"/>
        <CardImagenes title="Foto de Instalacion"/>
        <CardImagenes title="Opcional"/>
      </View>
    </ScrollView>
  );
};
