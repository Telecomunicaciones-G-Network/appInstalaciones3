import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RefreshControl } from "react-native-gesture-handler";
import { AppDispatch } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { fetchOrdenes } from "../../../../store/Ordenes/Thunks";

export const DoesNotHaveOrders = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const onRefresh = React.useCallback(() => {
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View>
            <AntDesign name="copy1" size={100} color="#9ca3af" />
          </View>
          <Text style={tw`text-2xl font-semibold text-gray-400 mt-5`}>
            No posee ordenes
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
