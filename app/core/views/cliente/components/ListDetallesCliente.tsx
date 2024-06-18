import { Text, View } from "react-native";
import tw from "twrnc";

import { StyleSheet } from "react-native";
import { Divider, List, ListItem } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";
import { Cargando } from "../../../../components/Cargando";

export const ListDetallesCliente = () => {
  const { group, client, contract, isLoading } = useSelector(
    (d: SelectorInterface) => d.ordenesId
  );
  return (
    <View style={[tw`rounded-lg bg-white shadow-sm p-2 pb-8 h-[80%]`]}>
      {isLoading ? (
        <Cargando />
      ) : (
        <>
          <ListItem
            title="Fecha de agendado"
            style={tw`py-4`}
            accessoryLeft={() => <Ionicons name="calendar" size={20} />}
            accessoryRight={() => (
              <Text style={tw`font-semibold`}>20-3-2022</Text>
            )}
          />
          <Divider />
          <ListItem
            title="Grupo"
            style={tw`py-4`}
            accessoryLeft={() => <Ionicons name="people" size={20} />}
            accessoryRight={() => (
              <Text style={tw`font-semibold`}>
                {group ? group.name : "No tiene Grupo asignado"}
              </Text>
            )}
          />
          <Divider />
          <ListItem
            title="Telefono"
            style={tw`py-4`}
            accessoryLeft={() => <Ionicons name="call" size={20} />}
            accessoryRight={() => (
              <Text style={tw`font-semibold`}>
                {client ? client.phone : "No tiene telefono regitrado"}
              </Text>
            )}
          />
          <Divider />
          <ListItem
            title="Coordenada"
            style={tw`py-4`}
            accessoryLeft={() => <Ionicons name="navigate" size={20} />}
            accessoryRight={() => (
              <Text style={tw`font-semibold`}>
                {contract
                  ? `${Number(contract.latitude).toFixed(6)}, ${Number(
                      contract.longitude
                    ).toFixed(6)}`
                  : "No posee coordenada"}
              </Text>
            )}
          />
          <Divider />
          <ListItem
            title="Status"
            style={tw`py-4`}
            accessoryLeft={() => (
              <Ionicons name="information-circle" size={20} />
            )}
            accessoryRight={() => (
              <Text style={tw`font-semibold`}>
                {contract ? contract.status_name : ""}
              </Text>
            )}
          />
          <Divider />
          <ListItem
            title="Ubicacion"
            style={tw`py-4`}
            accessoryLeft={() => <Ionicons name="locate" size={20} />}
          />
          <Text style={tw` pl-3`}>{contract ? contract.address : ""}</Text>
        </>
      )}
    </View>
  );
};
