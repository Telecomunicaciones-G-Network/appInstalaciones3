import { useTheme } from "@ui-kitten/components";
import { RefreshControl, Text, View } from "react-native";
import tw from "twrnc";
import { CardImagenes } from "./components/CardImagenes";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

export const ImagenesViews = () => {
  const dispatch=useDispatch<any>()
  const theme = useTheme();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView   refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
    }>
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
