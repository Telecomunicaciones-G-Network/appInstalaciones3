import { Text, View } from "react-native";
import { theme } from "../../../../App";
import tw from "twrnc";
import { CardClient } from "./components/CardClient";
import { DetailCliente } from "./components/DetailCliente";
import { AvatarClient } from "./components/AvatarClient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export const ClientScreen = () => {
  return (
    
      <ScrollView style={{ flex: 1 }}>
        <View
          style={[
            tw`px-2 `,
            { flex: 1, backgroundColor: theme.colors.default,paddingBottom:20 },
          ]}
        >
          <AvatarClient />
          <CardClient />
          <DetailCliente />
        </View>
      </ScrollView>
    
  );
};
