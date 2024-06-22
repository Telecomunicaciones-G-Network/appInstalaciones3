import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../../../App";
import tw from "twrnc";
import { CardNapBoxClient } from "./components/CardNapBoxClient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ListNapBoxClient } from "./components/ListNapBoxClient";
import { MapNapBoxClient } from "./components/MapNapBoxClient";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

export const NapBoxClient = () => {
  return (
    <ScrollView>
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
            content="20"
            icon={
              <FontAwesome5
                name="network-wired"
                size={20}
                color={theme.colors.primary}
              />
            }
          />
          <CardNapBoxClient
            title="Aeropuerto"
            content={
              <Ionicons
                name="airplane"
                size={28}
                color={theme.colors.primary}
              />
            }
          />
          <CardNapBoxClient
            title="Centro comercial"
            content={
              <MaterialCommunityIcons name="store" size={28} color="black" />
            }
          />
        </View>
        <View style={tw`bg-white h-50 rounded-xl p-2 mb-4`}>
          <MapNapBoxClient />
        </View>
        <ListNapBoxClient />
        
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
