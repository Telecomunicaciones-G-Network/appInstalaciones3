import { ScrollView, View } from "react-native";
import tw from "twrnc";
import { theme } from "../../../../../App";
import { AvatarClient } from "./components/AvatarClient";
import { CardClient } from "./components/CardClient";
import { DetailCliente } from "./components/DetailCliente";
import { MapClient } from "./components/MapClient";

import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchIdContratoId } from "../../../../store/contrato/Thunks";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { RefreshControl } from "react-native-gesture-handler";
import { LoadingAbsolute } from "../../../../components/LoadingAbsolute";
import { ButtonConfirmInstalation } from "./components/ButtonConfirmInstalation";

export const UserClient = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { contract } = useSelector((d: RootState) => d.ordenActive);
  const { isLoading } = useSelector((d: RootState) => d.contratoID);
  const dispatch = useDispatch<AppDispatch>();

  const requestClient = () => {
    dispatch(fetchIdContratoId(contract));
  };

  useEffect(() => {
    requestClient();
  }, []);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      requestClient();
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
          tw`px-2 `,
          { flex: 1, backgroundColor: theme.colors.default, paddingBottom: 30 },
        ]}
      >
        {isLoading ? (
          <View style={[tw``,{flex:1}]}>
            <LoadingSpinner />
          </View>
        ) : (
          <>
            <AvatarClient />
            <CardClient />
            <DetailCliente />
            <View style={tw`h-60 bg-white mt-5 rounded-xl p-2`}>
              <MapClient />
            </View>
            <ButtonConfirmInstalation/>
          </>
        )}
      </View>
    </ScrollView>
  );
};
