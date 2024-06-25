import { Linking, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native-gesture-handler";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../../../../../../App";
import { RootState } from "../../../../../store/store";
import { useSelector } from "react-redux";
import { ModalComponent } from "../../../../../components/Modal";
import { useState } from "react";
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export const CardClient = () => {
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const { contrato: contract } = useSelector((d: RootState) => d.contratoID);
  const handleCancel = () => {
    navigation.navigate('option' as never)
    setVisible(false);
  };
  return (
    <View style={tw`mt-3`}>
      <Text style={[tw`text-gray-400 text-sm`, { alignSelf: "flex-end" }]}>
        Acciones
      </Text>
      <View style={[tw`items-center justify-center`, styles.container]}>
        <TouchableOpacity
          style={[
            tw`bg-white rounded-xl shadow-md flex justify-center items-center`,
            styles.imageContainer,
          ]}
          onPress={() =>
            Linking.openURL(
              `https://wa.me/+58${contract && contract.client_phone}`
            )
          }
        >
          <FontAwesome6 name="whatsapp" size={24} color="#25D366" />
          <Text style={tw``}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white rounded-xl shadow-md flex justify-center items-center`,
            styles.imageContainer,
          ]}
          onPress={() =>
            Linking.openURL(`tel:${contract && contract.client_phone}`)
          }
        >
          <FontAwesome6 name="phone" size={24} color={theme.colors.primary} />
          <Text style={tw``}>Teléfono</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white rounded-xl shadow-md flex  justify-center items-center bg-red-500`,
            styles.imageContainer,
          ]}
          onPress={()=>setVisible(true)}
        >
          <Ionicons name="close-sharp" size={24} color="white" />
          <Text style={tw`text-white`}>Cancelar</Text>
        </TouchableOpacity>
        <ModalComponent
          isVisible={visible}
          title="Confirmar"
          message="Estas seguro que deseas cancelar la orden?"
          onChange={setVisible}
          actions={
            <>
              <Button mode="text" onPress={() => setVisible(false)}>
                Cancelar
              </Button>
              <Button mode="contained" onPress={handleCancel}>
                Confirmar
              </Button>
            </>
          }
        />
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
  },
});
