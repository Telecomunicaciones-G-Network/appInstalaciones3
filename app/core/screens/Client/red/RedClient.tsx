import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../../../../App";
import tw from "twrnc";
import { DetailRed } from "./components/DetailRed";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { fetchProvisioning } from "../../../../store/instalacion/Thunks";

export const RedClient = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [valid, setValid] = useState(false);
  const { contrato } = useSelector((d: RootState) => d.contratoID);
  const { isLoading, provisioning } = useSelector(
    (d: RootState) => d.provisiningActive
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleRequest = () => {
    dispatch(
      fetchProvisioning({
        contract: contrato ? contrato.id : 0,
        //contract: 15411,
      })
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      handleRequest();
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const { onu_signal_1490 }: any = provisioning;
      let pattern = /-?(\d+\.?\d*)/;
      let match = onu_signal_1490.match(pattern);
      if (match) {
        let value = parseFloat(match[0]);
        if (value >= -26.0 && value <= -15.0) {
          setValid(true);
        } else {
          setValid(false);
        }
      } else {
        setValid(false);
      }
    }
  }, [isLoading]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View
        style={[
          tw`px-2`,
          { flex: 1, backgroundColor: theme.colors.default, paddingBottom: 20 },
        ]}
      >
        <View style={tw`items-center pt-7`}>
          <MaterialCommunityIcons
            name="access-point-network"
            size={150}
            color={valid ? "#22c55e" : "red"}
          />
        </View>

        <View style={tw`flex-1 mt-7`}>
          <DetailRed />
        </View>
      </View>
    </ScrollView>
  );
};
