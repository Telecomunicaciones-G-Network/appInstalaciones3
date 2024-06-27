import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchOrdenes } from "../../../store/Ordenes/Thunks";
import { useCallback, useEffect, useMemo, useState } from "react";
import tw from "twrnc";
import { CardOrden } from "./components/CardOrden";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { InfoOrden } from "./components/InfoOrden";
import { OptionsOrden } from "./components/OptionsOrden";
import { ButtonConfirmOrden } from "./components/ButtonConfirmOrden";
import { DoesNotHaveOrders } from "./components/DoesNotHaveOrders";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

export const OrderScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { ordenes, isLoading } = useSelector((d: RootState) => d.ordenes);
  const [orderID, setOrderID] = useState<any>(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(
        fetchOrdenes({
          status: 41,
        })
      );
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(
      fetchOrdenes({
        status: 41,
      })
    );
  }, []);
  useEffect(() => {
    if (ordenes.length > 0) {
      setOrderID(ordenes[0]);
    } else {
      setOrderID(false);
    }
  }, [isLoading]);
  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View
        style={[tw`px-2 `, { flex: 1, backgroundColor: theme.colors.default }]}
      >
        <View style={[tw`h-12 flex  pt-4 justify-between`]}>
          <View style={tw`flex-row`}>
            <FontAwesome6
              name="user-clock"
              size={17}
              color={theme.colors.secondary}
            />
            <Text style={tw`text-gray-400 font-semibold ml-1`}>
              Pendientes:{ordenes.length}
            </Text>
          </View>
        </View>
        {isLoading ? (
          <LoadingSpinner />
        ) : !orderID ? (
          <DoesNotHaveOrders />
        ) : (
          <>
            <CardOrden order={orderID} />
            <InfoOrden order={orderID} />
            <OptionsOrden ordenID={orderID} />
            <ButtonConfirmOrden order={orderID} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
