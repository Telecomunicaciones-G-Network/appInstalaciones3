import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchOrdenes } from "../../../store/Ordenes/Thunks";
import { useEffect } from "react";
import tw from "twrnc";

import { CardOrden } from "./components/CardOrden";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { InfoOrden } from "./components/InfoOrden";

export const OrderScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { ordenes } = useSelector((d: RootState) => d.ordenes);

  useEffect(() => {
    dispatch(
      fetchOrdenes({
        status: 41,
      })
    );
  }, []);
  return (
    <View style={tw`mx-2 `}>
      <View style={[tw`h-12 flex  pt-4 justify-between`]}>
        <View style={tw`flex-row`}>
          <FontAwesome6
            name="user-clock"
            size={17}
            color={theme.colors.secondary}
          />
          <Text style={tw`text-gray-400 font-semibold ml-1`}>
            Pendientes:30
          </Text>
        </View>
      </View>

      <CardOrden />
      <InfoOrden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
