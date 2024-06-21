import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native-gesture-handler";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../../../../../../App";

export const CardClient = () => {
  return (
    <View style={tw`mt-3`}>
      
      <Text style={[tw`text-gray-400 text-sm`,{alignSelf:'flex-end'}]}>Acciones</Text>
      <View style={[tw`items-center justify-center`, styles.container]}>
        <TouchableOpacity
          style={[
            tw`bg-white rounded-xl shadow-md flex justify-center items-center`,
            styles.imageContainer,
          ]}
          // onPress={() =>
          //   Linking.openURL(
          //     `https://wa.me/+58${contract && contract.client_phone}`
          //   )
          // }
        >
          <FontAwesome6 name="whatsapp" size={24} color="#25D366" />
          <Text style={tw``}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white rounded-xl shadow-md flex justify-center items-center`,
            styles.imageContainer,
          ]}
          // onPress={() =>
          //  Linking.openURL(`tel:${contract && contract.client_phone}`)
          // }
        >
          <FontAwesome6 name="phone" size={24} color={theme.colors.primary} />
          <Text style={tw``}>Teléfono</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white rounded-xl shadow-md flex px-9 justify-center items-center `,
            styles.imageContainer,
          ]}
        >
          <FontAwesome5
            name="map-marker-alt"
            size={24}
            color={theme.colors.primary}
          />
          <Text style={tw``}>Mapa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "100%",
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
});
