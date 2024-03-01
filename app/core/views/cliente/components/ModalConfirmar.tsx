import { Ionicons } from "@expo/vector-icons";
import { Button, Card, Modal } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

export const ModalConfirmar = ({
  visible,
  setVisible,
  confirmar,
}: {
  visible: boolean;
  setVisible: (params: any) => void;
  confirmar: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <View style={[, { flex: 1 }]}>
            <View style={tw`flex justify-center item-center ml-[40%]`}>
              <Ionicons name="help-outline" size={70} />
            </View>
            <Text style={tw`font-semibold text-md`}>
              ¿Estas seguro que quieres marcar como finalizado?
            </Text>
          </View>
          <View style={tw`flex-row items-center justify-center`}>
            <Button
              onPress={() => setVisible(false)}
              style={tw`mt-5 bg-red-500`}
            >
              Cancelar
            </Button>
            <Button onPress={() => confirmar()} style={tw`mt-5 ml-10`}>
              Confirmar
            </Button>
          </View>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
