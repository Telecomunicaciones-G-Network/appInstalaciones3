import { Text, View } from "react-native";
import { NoAprovisionado } from "./NoAprovisionado";
import { Divider, ListItem, useTheme } from "@ui-kitten/components";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollViewApro } from "./ScrollViewApro";
import { useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";

export const Aprovisionado = () => {
  const { serviceDetail } = useSelector((d: SelectorInterface) => d.contratoID);
  const validar = false;

  // if (validar) return <NoAprovisionado />;

  const theme = useTheme();

  const NoPoseeProducto = () => <Text style={tw`text-red-500`}>No posee producto</Text>;

  return (
    <ScrollViewApro>
      <View style={tw`p-2`}>
        <View style={tw`rounded-lg bg-white shadow-sm p-3`}>
          <ListItem
            title="IP"
            style={tw`py-7`}
            accessoryLeft={() => <Ionicons size={25} name="globe-outline" />}
            accessoryRight={() => serviceDetail? <Text>{serviceDetail.ip?serviceDetail.ip:'No posee IP'}</Text>:<NoPoseeProducto/>}
          />
          <Divider />
          <ListItem
            title="MAC"
            style={tw`py-7`}
            accessoryLeft={() => (
              <Ionicons size={25} name="hardware-chip-outline" />
            )}
            accessoryRight={() => serviceDetail? <Text>{serviceDetail.mac?serviceDetail.mac:'No posee MAC'}</Text>:<NoPoseeProducto/>}
          />
          <Divider />
          <ListItem
            title="ppUser"
            style={tw`py-7`}
            accessoryLeft={() => <Ionicons size={25} name="person" />}
            accessoryRight={() => serviceDetail? <Text>{serviceDetail.ppuser?serviceDetail.ppuser:'No posee ppUser'}</Text>:<NoPoseeProducto/>}
          />
          <Divider />
          <ListItem
            title="Serial"
            style={tw`py-7`}
            accessoryLeft={() => <Ionicons size={25} name="pricetag" />}
            accessoryRight={() => serviceDetail? <Text>{serviceDetail.serial?serviceDetail.serial:'No posee serial'}</Text>:<NoPoseeProducto/>}
          />
        </View>
        {/* <View
          style={tw`rounded-lg  p-3 mt-4 flex justify-center items-center h-20 border border-yellow-600 bg-yellow-500/30`}
        >
          <Text style={tw`font-semibold text-yellow-600`}>
            Nivel Fuera de rango Verifica el aprovisionamiento
          </Text>
        </View> */}
      </View>
    </ScrollViewApro>
  );
};
