import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../../../App";
import tw from "twrnc";
import { CardNapBoxClient } from "./components/CardNapBoxClient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ListNapBoxClient } from "./components/ListNapBoxClient";
import { MapNapBoxClient } from "./components/MapNapBoxClient";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useCallback, useEffect, useState } from "react";
import { fetchNap_box } from "../../../../store/cajaNap/Thunks";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";

export const NapBoxClient = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [refreshing, setRefreshing] = useState(false);
  const { serviceDetail } = useSelector((d: RootState) => d.contratoID);
  const { isLoading, napBox } = useSelector((d: RootState) => d.nap_box);
  console.log(serviceDetail)  
  
  
  useEffect(() => {
    if (serviceDetail) {
      dispatch(fetchNap_box(Number(serviceDetail.nap_id)));
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true
      
      
    );
    setTimeout(() => {
      setRefreshing(false);
      if (serviceDetail) {
        dispatch(fetchNap_box(Number(serviceDetail.nap_id)));
      }
      
    }, 2000);
  }, []);

  return (
    <ScrollView
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
      <View
        style={[
          tw`px-3 pt-3`,
          { flex: 1, backgroundColor: theme.colors.default, paddingBottom: 40 },
        ]}
      >
        <Text style={tw`text-3xl font-semibold`}>N159-Z3-O</Text>

        <View style={styles.container}>
          <CardNapBoxClient
            title="Nro puertos"
            content={napBox?napBox.port.length:0}
            icon={
              <FontAwesome5
                name="network-wired"
                size={20}
                color="black"
              />
            }
          />
          <CardNapBoxClient
            title="Aeropuerto"
            content={
              <Ionicons
                name="airplane"
                size={28}
                color={napBox.airport?theme.colors.success:'black'}
              />
            }
          />
          <CardNapBoxClient
            title="Centro comercial"
            content={
              <MaterialCommunityIcons name="store" size={28} color={napBox.airport?theme.colors.success:'black'} />
            }
          />
        </View>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <View style={tw`bg-white h-50 rounded-xl p-2 mb-4`}>
              <MapNapBoxClient />
            </View>
            <ListNapBoxClient />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
