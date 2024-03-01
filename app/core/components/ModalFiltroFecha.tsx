import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { InputDateFecha } from "./InputDateFecha";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";
import { ocultarModalFecha } from "../../store/modals/modalFecha";

export const ModalFiltroFecha = () => {
  const [visible, setVisible] = React.useState(false);
  const dispatch =useDispatch<any>()
  const {isOpen}=useSelector((d:SelectorInterface)=>d.modalFechaSlice)
  return (
    <View>
      <Modal
        visible={isOpen}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => dispatch(ocultarModalFecha())}
      >
        <Card disabled={true} style={tw`pb-5`}>
          <InputDateFecha />
          <InputDateFecha />
          <Button style={tw`mt-5 `} onPress={() => setVisible(false)}>
            FILTRAR
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
