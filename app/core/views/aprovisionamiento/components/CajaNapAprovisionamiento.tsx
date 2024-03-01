import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import { Divider, List, ListItem, useTheme } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";
import { ScrollViewApro } from "./ScrollViewApro";
import { useNavigation } from "@react-navigation/native";

export const CajaNapAprovisionamiento = () => {
  const navigation = useNavigation<any>()
  const { isLoading, nap_box } = useSelector(
    (d: SelectorInterface) => d.nap_box
  );
  const { contrato } = useSelector(
    (d: SelectorInterface) => d.contratoID
  );

  const handleVer=()=>{
    if (nap_box) {
      if (contrato) {
        navigation.navigate("map", {
          lat: nap_box.latitude,
          lng: nap_box.longitude,
          nombre:`${contrato.client_name} ${contrato.client_name_lastname}`,
        });
        
      }
    }
  }

  const theme = useTheme();
  return (
    <ScrollViewApro>
    <View style={tw`p-2`}>
      <View style={tw`rounded-lg bg-white shadow-sm p-3`}>
        <View>
          <ListItem
            title="Cajan Nap"
            description={() => (
              <Text style={tw`ml-2 text-xl font-semibold`}>Nap-345-3</Text>
            )}
            style={tw`py-7`}
            accessoryLeft={() => <Ionicons name="cube" size={25} />}
            accessoryRight={() => (
              <TouchableOpacity onPress={handleVer} activeOpacity={0.5} style={[tw`p-2 rounded-lg`,{backgroundColor:theme['color-danger-500']}]}>
                <Text style={tw`text-white font-semibold`}>Ver</Text>
              </TouchableOpacity>
            )}
          />
          <Divider />
          <ListItem
            title="Detalles"
            style={tw`py-7`}
            accessoryLeft={() => (
              <Ionicons size={25} name="information-circle" />
            )}
            accessoryRight={() =>
              nap_box ? (
                <Text>{nap_box.detail}</Text>
              ) : (
                <NoPosee title="No posee detalles" />
              )
            }
          />
          <Divider />
          <ListItem
            title="Coordenadas"
            style={tw`py-7`}
            accessoryLeft={() => (
              <Ionicons
                style={{ color: theme["color-danger-500"] }}
                size={25}
                name="locate"
              />
            )}
            accessoryRight={() =>
              nap_box ? (
                <Text>
                  {Number(nap_box.latitude).toFixed(6)},{" "}
                  {Number(nap_box.latitude).toFixed(6)}
                </Text>
              ) : (
                <Posee title="No posee detalles" />
              )
            }
          />

          <Divider />
          <ListItem
            title="Cantidad de puertos"
            style={tw`py-7`}
            accessoryLeft={() => <Ionicons size={25} name="layers" />}
            accessoryRight={() =>
              nap_box ? (
                <Text>{nap_box.port.length}</Text>
              ) : (
                <NoPosee title={"No posee puertos"} />
              )
            }
          />
          <Divider />
          <ListItem
            title="Puertos ocupado"
            style={tw`py-7`}
            accessoryLeft={() => (
              <Ionicons
                size={25}
                name="ban"
                style={{ color: theme["color-danger-500"] }}
              />
            )}
            accessoryRight={() =>
              nap_box ? (
                <Text>
                  {Math.max(nap_box.port.length - nap_box.ports_ocupped, 0)}
                </Text>
              ) : (
                <NoPosee title={"No posee puertos"} />
              )
            }
          />
          <Divider />
          <ListItem
            title="Centro Comercial"
            style={tw`py-7`}
            accessoryRight={() =>
              nap_box ? (
                <Ionicons
                  size={25}
                  name="storefront"
                  style={tw`${
                    nap_box.shopping_center ? "text-green-500" : "text-red-500"
                  }`}
                />
              ) : (
                <Posee title="No posee detalles" />
              )
            }
          />
        </View>
      </View>
    </View>
    </ScrollViewApro>
  );
};

const NoPosee = ({ title }: { title: any }) => (
  <Text style={tw`text-red-500`}>{title}</Text>
);
const Posee = ({ title }: { title: any }) => (
  <Text style={tw`font-semibold`}>{title}</Text>
);
