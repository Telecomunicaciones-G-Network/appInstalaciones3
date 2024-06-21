import { Text, View } from "react-native";
import { List } from "react-native-paper";
import tw from 'twrnc';
import { theme } from "../../../../../../App";

export const DetailRed = () => {
  return (
    <View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>IP</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon {...props} icon="ip-network" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>MAC</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon {...props} icon="router-network" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>ppUser</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon {...props} icon="account-key" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Serial</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon {...props} icon="barcode" color={theme.colors.primary} />
          )}
        />
      </View>
    </View>
  );
};
