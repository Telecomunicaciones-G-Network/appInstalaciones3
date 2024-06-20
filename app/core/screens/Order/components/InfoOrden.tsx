import { Text, View } from "react-native";
import { List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../App";

export const InfoOrden = () => {
  return (
    <View>
      <View>
        <Text style={tw`mt-7 text-xl font-semibold text-center`}>Información del cliente</Text>
      </View>
      <View
        style={[
          tw`mt-2 border-b-2 `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          title="Cliente"
          description="Item description"
          right={(props) => <List.Icon {...props} icon="account" />}
        />
      </View>
      <View
        style={[
          tw`mt-2 border-b-2 `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          title="Dirección"
          description="Item description"
          right={(props) => <List.Icon {...props} icon="map-marker" />}
        />
      </View>
      <View
        style={[
          tw`mt-2 border-b-2 `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          title="Telefono"
          description="Item description"
          right={(props) => <List.Icon {...props} icon="phone" />}
        />
      </View>
    </View>
  );
};
