import { Text, View } from "react-native";
import { List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../App";

export const DetailCliente = () => {
  return (
    <View style={tw`mt-4`}>
      <Text style={[tw`text-gray-400 text-lg `, { alignSelf: "flex-end" }]}>
        Detalles
      </Text>
      <View style={tw`bg-white shadow-md rounded-xl my-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>
              Fecha de agendado
            </Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon
              {...props}
              icon="calendar-range"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Grupo</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon
              {...props}
              icon="account-group"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Teléfono</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon {...props} icon="phone" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Coordenadas</Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon
              {...props}
              icon="map-marker-radius"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Ubicación</Text>
          )}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, aspernatur saepe doloremque quisquam omnis iste provident voluptatibus nihil? Consectetur officiis eius, impedit deleniti corrupti facilis doloremque laboriosam ullam doloribus quos."
          right={(props) => (
            <List.Icon
              {...props}
              icon="map-marker-path"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
    </View>
  );
};
