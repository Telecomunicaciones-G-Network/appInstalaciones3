import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../App";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ModalComponent } from "../../../../components/Modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const ButtonConfirmOrden = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const handleConfirm = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "client" as never }],
    });
    setVisible(false);
  };
  return (
    <View style={tw`mt-10`}>
      <Button
        mode="contained"
        style={[
          tw`h-11`,
          { backgroundColor: theme.colors.success, justifyContent: "center" },
        ]}
        icon={() => (
          <FontAwesome6 name="circle-check" size={20} color="white" />
        )}
        onPress={() => setVisible(true)}
      >
        Aceptar instalación
      </Button>
      <ModalComponent
        isVisible={visible}
        title="Confirmar"
        message="Estas seguro que deseas aceptar la instalación?"
        onChange={setVisible}
        actions={
          <>
            <Button mode="contained" onPress={handleConfirm}>
              Aceptar
            </Button>
          </>
        }
      />
    </View>
  );
};
