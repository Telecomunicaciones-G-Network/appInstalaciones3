import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text, useTheme } from "@ui-kitten/components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { InputDateFecha } from "./InputDateFecha";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";
import { ocultarModalFecha } from "../../store/modals/modalFecha";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ToastError } from "../../libs/Toast";
import { setFechaCore } from "../../store/core/coreSlice";

export const ModalFiltroFecha = () => {
  const [visible, setVisible] = React.useState(false);
  const [fecha, setFecha] = React.useState({ desde: "", hasta: "" });
  const theme = useTheme();
  const dispatch = useDispatch<any>();
  const { isOpen } = useSelector((d: SelectorInterface) => d.modalFechaSlice);
  const handleFecha = () => {
    const { desde, hasta } = fecha;
    const d = new Date(desde);
    const h = new Date(hasta);
    console.log(d);
    console.log(h);

    if (h < d)
      return ToastError('EL "hasta" no puede ser antes que el "Desde"');
    dispatch(setFechaCore({ since: desde, until: hasta }));
    dispatch(ocultarModalFecha());
  };
  return (
    <View>
      <Modal
        visible={isOpen}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => dispatch(ocultarModalFecha())}
      >
        <Card disabled={true} style={tw`pb-5`}>
          <InputDateFecha title="Desde" setearFecha={setFecha} />
          <InputDateFecha title="Hasta" setearFecha={setFecha} />
          <Button
            style={[tw`mt-5 `, { backgroundColor: theme["color-primary-500"] }]}
            onPress={handleFecha}
          >
            <Text style={tw`text-white font-semibold`}>FILTRAR</Text>
          </Button>
        </Card>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
