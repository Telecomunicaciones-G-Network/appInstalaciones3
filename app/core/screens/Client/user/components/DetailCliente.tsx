import { Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../../App";
import { ScrollView } from "react-native-gesture-handler";
import { ModalComponent } from "../../../../../components/Modal";
import { useState } from "react";

export const DetailCliente = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={tw`mt-4`}>
      <Text style={[tw`text-gray-400 text-sm `, { alignSelf: "flex-end" }]}>
        Detalles
      </Text>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>
              Orden de instalación
            </Text>
          )}
          description="Item description"
          right={(props) => (
            <List.Icon
              {...props}
              icon="tag-multiple"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
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
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
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
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
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
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Ubicación</Text>
          )}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, aspernatur saepe doloremque quisquam omnis iste provident voluptatibus nihil? Consectetur officiis eius, impedit deleniti corrupti facilis doloremque laboriosam ullam doloribus quos."
          onPress={()=>setVisible(true)}
          right={(props) => (
            <List.Icon
              {...props}
              icon="map-marker-path"
              color={theme.colors.primary}
            />
          )}
        />
        <ModalComponent
          isVisible={visible}
          title="Ubicación"
          message={
            <Text style={tw`text-lg`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore a ea, recusandae, ipsam commodi minima neque ex facere
              corrupti est sit accusamus earum molestiae magnam eaque. Nisi
              tenetur reiciendis recusandae. Quia recusandae a dolorum facilis
              asperiores provident suscipit ipsum officiis animi, repudiandae
              rerum, sequi quos? Quod veritatis illum culpa doloremque inventore
              iste. Labore saepe alias molestiae consequatur laudantium
              quibusdam eaque.
            </Text>
          }
          onChange={setVisible}
          actions={
            <>
              <Button mode="contained" onPress={() => setVisible(false)}>
                Cerrar
              </Button>
            </>
          }
        />
      </View>
    </View>
  );
};
