import { ScrollView, Text, View } from "react-native";
import { theme } from "../../../../App";
import tw from "twrnc";
import { List } from "react-native-paper";
import { coreApi } from "../../../api/CoreApi";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native-gesture-handler";

export const CompletedScreen = () => {
  
  const [refreshing, setRefreshing] = useState(false);
  const [ordenes, setOrdenes] = useState<any>([]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleResquest()
    
  }, []);
  const handleResquest = async () => {
    const date = new Date();


    coreApi
      .get(`/api/gsoft/installations/orders/`, {
        params: { status: 42},
      })
      .then(({data:{results}}:any) => {
        setOrdenes(results)
        setRefreshing(false);
      })
      .catch((err) => {
        console.log(err);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    handleResquest();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={[tw`px-2 `, { flex: 1 ,paddingBottom:30}]}>
        <Text style={tw`text-xl `}>Ordenes completadas</Text>
        <View
          style={[tw`bg-white rounded-xl shadow-md mt-5 p-1 pb-2`, { flex: 1 }]}
        >
          {ordenes.length == 0 ? (
            <></>
          ) : (
            ordenes.map((d: any) => (
              <List.Item
                title={d.order}
                description={d.client_name}
                left={(props) => (
                  <List.Icon {...props} icon="note-text-outline" />
                )}
              />
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const NoOrder = () => {
  return (
    <View
      style={[
        tw` justify-center items-center`,
        { flex: 1, alignSelf: "center " },
      ]}
    >
      <Text style={tw`text-xl`}>ADSSA</Text>
      <Text style={tw`text-xl`}>ADSSA</Text>
    </View>
  );
};
