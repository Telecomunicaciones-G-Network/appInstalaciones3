import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { AppDispatch, RootState } from "../../../../store/store";
import { patchOpciones } from "../../../../store/instalacion/Thunks";
import {
  mostrarCargando,
  ocultarCargando,
} from "../../../../store/splash/splashSlice";
import { ToastSuccess } from "../../../../libs/Toast";
import { useNavigation } from "@react-navigation/native";
import { fetchOrdenes } from "../../../../store/Ordenes/Thunks";

export const ButtonOption = ({ selectedIndex }: { selectedIndex: any }) => {
  const { id } = useSelector((d: RootState) => d.ordenesId);
  const { opciones } = useSelector((d: RootState) => d.opciones);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const onSubmit = () => {
    if (id) {
      dispatch(mostrarCargando());
      const d = opciones.find((d) => d.id == selectedIndex);
      patchOpciones(id, d)
        .then(({ data, status }) => {
          dispatch(ocultarCargando());
          dispatch(
            fetchOrdenes({
              status: 41,
            })
          );
          navigation.navigate('core' as never)
          ToastSuccess("Orden cancelada");
        })
        .catch((err) => {
          dispatch(ocultarCargando());
          ToastSuccess("Error al cancelar");
        });
    }
  };
  return (
    <Button
      mode="contained"
      style={tw`rounded-xl mt-5 mx-3`}
      onPress={onSubmit}
    >
      {" "}
      Cancelar orden
    </Button>
  );
};
