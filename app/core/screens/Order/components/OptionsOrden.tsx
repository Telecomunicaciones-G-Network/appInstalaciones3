import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import tw from "twrnc";
import { theme } from "../../../../../App";
import { Button, Modal, Portal } from "react-native-paper";
import { useState } from "react";
import { ModalComponent } from "../../../../components/Modal";

export const OptionsOrden = () => {
  const [visible, setVisible] = useState(false);
  const handleCancel = (item: any) => {
    console.log(`Presionaste la imagen ${item.id}`);
  };
  return (
    <View style={styles.container}>
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
        <Text>WhatsApp</Text>
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
        <Text>Telefono</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          tw`bg-white rounded-xl shadow-md flex justify-center items-center bg-red-500 `,
          styles.imageContainer,
        ]}
        onPress={() => setVisible(true)}
      >
        <Fontisto name="close-a" size={24} color="white" />
        <Text style={tw`text-white`}>Cancelar</Text>
      </TouchableOpacity>
      <ModalComponent
        isVisible={visible}
        title="Confirmar"
        message="Estas seguro que deseas cancelar la orden?"
        onChange={setVisible}
        actions={
          <>
            <Button              
              mode="text"
              onPress={() => setVisible(false)}
            >
              Cancelar
            </Button>
            <Button
              mode="contained"
              onPress={() => setVisible(false)}
            >
              Confirmar
            </Button>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "32%",
    marginBottom: 8,
    padding: 7,
  },
});
