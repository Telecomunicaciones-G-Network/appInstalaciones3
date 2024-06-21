import { Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../../App";
import { ModalComponent } from "../../../../../components/Modal";
import { useState } from "react";

export const ListNapBoxClient = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <View style={tw`bg-white rounded-xl shadow-md mb-2`}>
        <List.Item
          title="Sector"
          description="20"
          right={(props) => (
            <List.Icon
              {...props}
              icon="crosshairs"
              color={theme.colors.primary}
            />
          )}
        />
      </View>
      <View style={tw`bg-white rounded-xl shadow-md`}>
        <List.Item
          title="Puertos Ocupado"
          description="20"
          right={(props) => (
            <List.Icon {...props} icon="cancel" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white rounded-xl shadow-md my-2`}>
        <List.Item
          title="Coordenada"
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
      <View style={tw`bg-white rounded-xl shadow-md `}>
        <List.Item
          title="Detalles"
          description="Lorem ipsum dolor sit "
          onPress={() => setVisible(true)}
          right={(props) => (
            <List.Icon
              {...props}
              icon="information"
              color={theme.colors.primary}
            />
          )}
        />
        <ModalComponent
          isVisible={visible}
          title="Detalles"
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
