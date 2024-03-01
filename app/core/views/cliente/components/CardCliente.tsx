import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";
import { Cargando } from "../../../../components/Cargando";

export const CardCliente = () => {
  const { contract, isLoading } = useSelector(
    (d: SelectorInterface) => d.ordenesId
  );
  const theme = useTheme();

  return (
    <View style={tw`bg-white rounded-lg mt-[-90px]`}>
      {/* Imagen */}
      <View style={tw`flex justify-center items-center mt-[-40px]`}>
        <Image
          source={require("../../../../../assets/img/usuario_(1).png")}
          style={tw`h-20 w-20`}
        />
      </View>
      {/* Informacion */}
      <View style={tw` p-6`}>
        {isLoading ? (
          <Cargando />
        ) : (
          <>
            <Text style={tw`text-xl`}>
              {contract ? contract.client_name : ""}
            </Text>
            <Text style={tw`text-xl`}>
              {contract ? contract.client_name_lastname : ""}
            </Text>
            <Text style={tw`text-sm`}>
              {contract ? contract.identification : ""}
            </Text>
          </>
        )}
      </View>
      <View style={[tw`flex `, { flexDirection: "row" }]}>
        <TouchableOpacity
          style={[
            tw`h-14 border-gray-200 border rounded-bl-lg flex justify-center items-center`,
            { width: "auto", flexBasis: 120 },
          ]}
          onPress={() =>
            Linking.openURL(`tel:${contract && contract.client_phone}`)
          }
        >
          <Text style={{ color: theme["color-danger-500"] }}>
            <Ionicons name="call" /> Llamar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`border-gray-200 border flex justify-center items-center`,
            { width: "auto", flexBasis: 120 },
          ]}
          onPress={() =>
            Linking.openURL(
              `https://wa.me/+58${contract && contract.client_phone}`
            )
          }
        >
          <Text style={{ color: theme["color-danger-500"] }}>
            <Ionicons name="logo-whatsapp" /> Whatsapp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`h-14 border-gray-200 border rounded-br-lg flex justify-center items-center`,
            { width: "auto", flexBasis: 121 },
          ]}
        >
          <Text style={{ color: theme["color-danger-500"] }}>
            <Ionicons name="map" /> Mapa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
