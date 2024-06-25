import { Text, View } from "react-native";
import { List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../App";

export const InfoOrden = ({order}:{order:any}) => {
  return (
    <View>
      <View>
        <Text style={tw`mt-5  font-semibold text-gray-400`}>
          Información del cliente
        </Text>
      </View>
      <View
        style={[
          tw`mt-2  bg-white shadow-md rounded-xl `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Cliente</Text>
          )}
          description={order.client_name}
          left={(props) => (
            <List.Icon {...props} icon="account" color={theme.colors.primary} />
          )}
        />
      </View>
      <View
        style={[
          tw`mt-2  bg-white shadow-md rounded-xl `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Plan</Text>
          )}
          description={order.plan_name}
          left={(props) => (
            <List.Icon {...props} icon="account" color={theme.colors.primary} />
          )}
        />
      </View>
      <View
        style={[
          tw`mt-2  bg-white shadow-md rounded-xl `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Sector</Text>
          )}
          description={order.sector_name}
          left={(props) => (
            <List.Icon
              {...props}
              icon="map-marker"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
      <View
        style={[
          tw`mt-2  bg-white shadow-md rounded-xl `,
          { borderBottomColor: theme.colors.default },
        ]}
      >
        <List.Item
          
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Teléfono</Text>
          )}
          description={order.mobile}
          left={(props) => (
            <List.Icon {...props} icon="phone" color={theme.colors.primary} />
          )}
        />
      </View>
    </View>
  );
};
