import { Button, IconElement, Layout, List, ListItem } from "@ui-kitten/components";
import { RefreshControl, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { SearchCore } from "./SearchCore";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";
import { Cargando } from "../../components/Cargando";
import { Ordenes } from "../Interfaces/OrdenesInterface";
import { ScrollView } from "react-native-gesture-handler";
import { useCallback, useState } from "react";
import { OrdenesParams } from "../class/OrdenesParams";
import { fetchOrdenes } from "../../store/Ordenes/Thunks";

const data = new Array(20).fill({
  title: "Title for Item",
  description: "Description for Item",
});

export const ListCore = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const params = new OrdenesParams();
  const { desde, hasta, type } = useSelector((d: SelectorInterface) => d.core);
  const { isLoading, ordenes } = useSelector(
    (d: SelectorInterface) => d.ordenes
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    params.since = desde;
    params.until = hasta;
    type && (params.type = type);
    dispatch(fetchOrdenes(params));
    setRefreshing(false);
  }, []);


  

  const renderItemAccessory = ({ id,nap_box,contract }: any): React.ReactElement => {
    return (
      <Button
        size="tiny"
        accessoryRight={() => (
          <Ionicons name="eye" size={15} style={tw`text-gray-100`} />
        )}
        onPress={() =>
          navigation.navigate("client", {
            id,
            nap_box,
            contract
          })
        }
      >
        VER
      </Button>
    );
  };
  const renderItemIcon = (): IconElement => (
    <Ionicons name="construct" size={25} style={tw`text-gray-500`} />
  );

  const renderItem = ({ item }: { item: Ordenes }): React.ReactElement => (
    <ListItem
      title={`Orden ${item.order}`}
      description={`${item.client_name}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => renderItemAccessory(item)}
      style={tw`bg-white`}
    />
  );

  return (
    <View style={tw`flex-1 mt-[-5px]  rounded-t-lg`}>
      <Layout style={tw`pt-2 pb-24 flex-1 px-2 rounded-lg bg-white`} level="2">
        <SearchCore />
        {!isLoading && (
          <List
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            style={tw`p-1 bg-white`}
            data={ordenes}
            renderItem={renderItem}
          />
        )}
      {!isLoading && ordenes.length == 0 && (
        <View style={tw`flex-1  items-center`}>
          <Ionicons
            name="close-circle-outline"
            style={tw`text-gray-400 mt-2`}
            size={50}
          />
          <Text style={tw`text-lg text-gray-400 font-semibold`}>
            No hay nada para mostrar
          </Text>
        </View>
      )}
      {isLoading && <Cargando />}
      </Layout>

    </View>
  );
};
