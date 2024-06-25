import { Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../../App";
import { ModalComponent } from "../../../../../components/Modal";
import { useState } from "react";
import { RootState } from "../../../../../store/store";
import { useSelector } from "react-redux";

export const ListNapBoxClient = () => {
  const [visible, setVisible] = useState(false);
  const { isLoading, napBox } = useSelector((d: RootState) => d.nap_box);
  return (
    <View>
      <View style={tw`bg-white rounded-xl shadow-md mb-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Sector</Text>
          )}
          description={napBox.sector_name}
          left={(props) => (
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
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>
              Puertos Ocupado
            </Text>
          )}
          description="20"
          left={(props) => (
            <List.Icon {...props} icon="cancel" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white rounded-xl shadow-md my-2`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Coordenada</Text>
          )}
          description={napBox.coordinate}
          left={(props) => (
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
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Detalles</Text>
          )}
          description={napBox.detail}
          onPress={() => setVisible(true)}
          left={(props) => (
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
              {napBox.detail}
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
