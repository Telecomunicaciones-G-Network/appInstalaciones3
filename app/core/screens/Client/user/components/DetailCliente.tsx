import { Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../../App";
import { ScrollView } from "react-native-gesture-handler";
import { ModalComponent } from "../../../../../components/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import moment from "moment";

export const DetailCliente = () => {
  const { contrato } = useSelector((d: RootState) => d.contratoID);
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
          description={
            contrato?.installation_order ?? "No posee orden de instalación "
          }
          left={(props) => (
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
              Fecha de creación
            </Text>
          )}
          description={
            contrato?.created_at
              ? moment(contrato?.created_at).format("DD-MM-YYYY")
              : "No posee fecha de creación "
          }
          left={(props) => (
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
          description={contrato?.client_phone ?? "No posee teléfono "}
          left={(props) => (
            <List.Icon {...props} icon="phone" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Coordenadas</Text>
          )}
          description={
            contrato
              ? `${contrato.latitude}, ${contrato.longitude}`
              : "No posee coordenadas "
          }
          left={(props) => (
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
          description={contrato?.address??'No posee ubicación '}
          onPress={() => setVisible(true)}
          left={(props) => (
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
              {contrato?.address??'No posee ubicación '}
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
