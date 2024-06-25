import { View } from "react-native";
import { Button } from "react-native-paper";
import tw from "twrnc";
import { theme } from "../../../../../App";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ModalComponent } from "../../../../components/Modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fetchIdOrden, postOrdenValid } from "../../../../store/Ordenes/Thunks";
import { Ordenes } from "../../../Interfaces/OrdenesInterface";
import { getLocation } from "../../../../libs/GetLocation";
import { ToastError, ToastSuccess } from "../../../../libs/Toast";
import { setActiveOrden } from "../../../../store/Ordenes/OrdenActiveSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { setOrdenId } from "../../../../store/Ordenes/OrdenIdSlices";

interface Props {
  order: Ordenes;
}

export const ButtonConfirmOrden = ({ order: { id, contract } }: Props) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const routerConfirm = (body: any) => {
    const send = {
      ...body,
      contract,
    };
    
    
    dispatch(setActiveOrden(send));
    dispatch(setOrdenId(id));
    navigation.reset({
      index: 0,
      routes: [{ name: "client" as never, params: send }],
    });
    ToastSuccess("Orden Aceptada");
    setVisible(false);
  };

  const handleConfirm = async () => {
    const coords = await getLocation();
    const coordinate = `${coords?.latitude}, ${coords?.longitude}`;
    const body = {
      order: id,
      coordinate,
      status: true,
    };
     
    
    postOrdenValid(body)
      .then((result) => {
        console.log(JSON.stringify(result))
        const { status, coordinate, ...rest } = body;
        const data = {
          ...rest,
          latitude: coords?.latitude,
          longitude: coords?.longitude,
        };
        routerConfirm(data);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          ToastError(err.response.data.message);
        }
      });
  };

  return (
    <View style={tw`mt-2`}>
      <Button
        mode="contained"
        style={[
          tw`h-11 rounded-lg`,
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
