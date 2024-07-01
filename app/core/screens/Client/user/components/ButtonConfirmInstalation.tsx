import { View } from "react-native";
import { Button } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../../App";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import {
  mostrarCargando,
  ocultarCargando,
} from "../../../../../store/splash/splashSlice";
import { coreApi } from "../../../../../api/CoreApi";
import { ToastError, ToastSuccess } from "../../../../../libs/Toast";
import { ModalComponent } from "../../../../../components/Modal";
import { useState } from "react";
import {
  fetchOrdenes,
  patchOrdenFallow,
} from "../../../../../store/Ordenes/Thunks";
import { useNavigation } from "@react-navigation/native";

export const ButtonConfirmInstalation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const { contrato } = useSelector((d: RootState) => d.contratoID);
  const { ordenID } = useSelector((d: RootState) => d.ordenesId);
  const { idAllow } = useSelector((d: RootState) => d.ordenActive);
  const { valid } = useSelector((d: RootState) => d.provisiningActive);

  const finalizarOrden = () => {
    dispatch(mostrarCargando());
    if (contrato) {
      coreApi
        .post(
          `/api/gsoft/installations/provisioning-contract/`,
          {
            contract: contrato.id,
            order: contrato!.order_id,
          }
        )
        
        .then((result) => {
          dispatch(ocultarCargando());
          ToastSuccess("Finalizado con éxito");
          navigation.reset({
            index: 0,
            routes: [{ name: "core" as never }],
          });
        })
        .catch((err) => {
          setVisible(false )
          ToastError("Fuera de rango, verifica que tenga buena señal");
          dispatch(ocultarCargando());
        });
    }
  };

  const handlePatch = () => {
    patchOrdenFallow(idAllow, { status: false }).then((d) => {});
    setVisible(false);
    coreApi
      .patch(`/api/gsoft/installations/orders/${contrato!.order_id}/`, {
        status: 42,
      })
      .then((d) => {
        dispatch(ocultarCargando());
        ToastSuccess("Finalizado con éxito");
        dispatch(
          fetchOrdenes({
            status: 41,
          })
        );
        navigation.reset({
          index: 0,
          routes: [{ name: "core" as never }],
        });
      });
  };

  const handleButton = () => {
    if (ordenID.image_order.length < 4) {
      return ToastError("Debe ingresar todas las imágenes");
    }

    if (!contrato?.signe) {
      return ToastError("Debe ingresar la firma");
    }

    setVisible(true);
  };

  return (
    <View style={tw`mt-5 pb-4`}>
      <Button
        mode="contained"
        onPress={handleButton}
        icon={() => (
          <FontAwesome6 name="check-circle" size={24} color="white" />
        )}
        style={[
          tw`rounded-xl py-1`,
          { justifyContent: "center", backgroundColor: theme.colors.success },
        ]}
      >
        Instalado
      </Button>
      <ModalComponent
        isVisible={visible}
        title="Confirmar"
        message="Estas seguro que deseas marcar como instalado?"
        onChange={setVisible}
        actions={
          <>
            <Button mode="text" onPress={() => setVisible(false)}>
              Cancelar
            </Button>
            <Button mode="contained" onPress={finalizarOrden}>
              Confirmar
            </Button>
          </>
        }
      />
    </View>
  );
};
