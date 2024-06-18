import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import { Divider, ListItem, useTheme } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";
import { ScrollViewApro } from "./ScrollViewApro";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { fetchNap_box } from "../../../../store/cajaNap/Thunks";


export const CajaNapAprovisionamiento = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [napValid, setNapValid] = useState<boolean>(false);
  const { isLoading, napBox } = useSelector(
    (d: SelectorInterface) => d.nap_box
  );

  
  
  const { contrato, serviceDetail } = useSelector(
    (d: SelectorInterface) => d.contratoID
  );

  const handleVer = () => {
    if (napBox) {
      if (contrato) {
        navigation.navigate("map", {
          lat: napBox.latitude,
          lng: napBox.longitude,
          nombre: `${contrato.client_name} ${contrato.client_name_lastname}`,
        });
      }
    }
  };

  useEffect(() => {
    if (serviceDetail) {
      if (serviceDetail.nap_id == null || serviceDetail.nap_id == undefined)
        return setNapValid(false);
      setNapValid(true);
      dispatch(fetchNap_box(Number(serviceDetail.nap_id)));
    }
  }, []);

  const theme = useTheme();
  return (
    <ScrollViewApro>
      <View style={tw`p-2`}>
        <View style={tw`rounded-lg bg-white shadow-sm p-3`}>
          <View>
            <ListItem
              title="Cajan Nap"
              description={() => (
                <Text style={tw`ml-2 text-xl font-semibold`}>
                  {napValid ? napBox.name : "No posee caja nap"}
                </Text>
              )}
              style={tw`py-7`}
              accessoryLeft={() => <Ionicons name="cube" size={25} />}
              accessoryRight={() =>
                !napValid ? (
                  <></>
                ) : (
                  <TouchableOpacity
                    onPress={handleVer}
                    activeOpacity={0.5}
                    style={[
                      tw`p-2 rounded-lg`,
                      { backgroundColor: theme["color-danger-500"] },
                    ]}
                  >
                    <Text style={tw`text-white font-semibold`}>Ver</Text>
                  </TouchableOpacity>
                )
              }
            />
            <Divider />
            <ListItem
              title="Detalles"
              style={tw`py-7`}
              accessoryLeft={() => (
                <Ionicons size={25} name="information-circle" />
              )}
              accessoryRight={() =>
                napBox ? (
                  <Text>{napBox.detail}</Text>
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
                napBox ? (
                  <Text>
                    {Number(napBox.latitude).toFixed(6)},{" "}
                    {Number(napBox.latitude).toFixed(6)}
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
                napBox&&napBox.port? (
                  <Text>{napBox.port.length}</Text>
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
                napBox&&napBox.port ? (
                  <Text>{Math.max(napBox.port.length - napBox.ports_ocupped, 0)}</Text>
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
                napBox ? (
                  <Ionicons
                    size={25}
                    name="storefront"
                    style={tw`${
                      napBox.shopping_center
                        ? "text-green-500"
                        : "text-red-500"
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
