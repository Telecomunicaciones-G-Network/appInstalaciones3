import { useTheme } from "@ui-kitten/components";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CardCliente } from "./components/CardCliente";
import { ListDetallesCliente } from "./components/ListDetallesCliente";
import { Ionicons } from "@expo/vector-icons";
import { RefreshControl } from "react-native-gesture-handler";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../../interfaces/SelectorInterfaces";
import { toggleCargandoParam } from "../../../store/splash/splashSlice";
import { fetchIdOrden } from "../../../store/Ordenes/Thunks";

export const ClienteViews = () => {
  const { ordenID, isLoading } = useSelector(
    (d: SelectorInterface) => d.ordenesId
  );
  const dispatch = useDispatch<any>();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    if (ordenID) {
      dispatch(fetchIdOrden(ordenID.id));
      setRefreshing(false);
    }
  };
  const theme = useTheme();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={tw`flex-1 pb-10`}>
        <View
          style={[tw`h-40 `, { backgroundColor: theme["color-primary-500"] }]}
        />
        <View style={tw`px-4`}>
          <CardCliente />
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              tw`w-full flex justify-center items-center rounded-lg h-10 my-5`,
              { backgroundColor: theme["color-danger-500"] },
            ]}
          >
            <Text style={tw`text-white font-semibold`}>
              Iniciar <Ionicons name="play" />
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-gray-500 mb-3 mt-2`}>Detalles del cliente</Text>
          <ListDetallesCliente />
        </View>
      </View>
    </ScrollView>
  );
};
