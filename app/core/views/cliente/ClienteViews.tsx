import { useTheme } from "@ui-kitten/components";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { CardCliente } from "./components/CardCliente";
import { ListDetallesCliente } from "./components/ListDetallesCliente";
import { Ionicons } from "@expo/vector-icons";
import { RefreshControl } from "react-native-gesture-handler";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../../interfaces/SelectorInterfaces";
import { fetchIdOrden } from "../../../store/Ordenes/Thunks";
import { coreApi } from "../../../api/CoreApi";
import { ToastError, ToastSuccess } from "../../../libs/Toast";
import { ModalConfirmar } from "./components/ModalConfirmar";
import {
  mostrarCargando,
  ocultarCargando,
} from "../../../store/splash/splashSlice";


export const ClienteViews = () => {
  const { ordenID, isLoading,image_order } = useSelector(
    (d: SelectorInterface) => d.ordenesId
  );


  
  
  

  const dispatch = useDispatch<any>();
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    if (ordenID) {
      console.log(JSON.stringify(ordenID) );
      dispatch(fetchIdOrden(ordenID.id));
      setRefreshing(false);
    }
  };

  const finalizarOrden = () => {
    
    dispatch(mostrarCargando());
    if (ordenID) {
      coreApi
        .patch(
          `/api/gsoft/installations/orders/${ordenID.id}/?change_status=true`,
          {
            status: 42,
          }
        )
        .then((result) => {
          ToastSuccess("Finalizado con exito");
          dispatch(ocultarCargando());
          onRefresh();
          setVisible(false);
          dispatch(fetchIdOrden(ordenID.id));
        })
        .catch((err) => {
          dispatch(ocultarCargando());
          console.log(err.response);
        });
    }
  };




  const theme = useTheme();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={tw`flex-1 pb-10`}>
        <View
          style={[tw`h-40 `, { backgroundColor: theme["color-primary-500"] }]}
        />
        <View style={tw`px-4`}>
          <CardCliente />
          {ordenID && ordenID.status !== 42 && (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                tw`w-full flex justify-center items-center rounded-lg h-10 my-5`,
                { backgroundColor: theme["color-success-500"] },
              ]}
              onPress={() => {                
                if (image_order.length < 4) {
                  return ToastError('Debes seleccionar al menos 4 imágenes')
                }
                setVisible(true)
              }}
            >
              <Text style={tw`text-white font-semibold`}>
                Finalizado <Ionicons name="checkmark-circle-outline" />
              </Text>
            </TouchableOpacity>
          )}
          <Text style={tw`text-gray-500 mb-3 mt-2`}>Detalles del cliente</Text>
          <ListDetallesCliente />
        </View>
      </View>
      <ModalConfirmar
        visible={visible}
        setVisible={setVisible}
        confirmar={finalizarOrden}
      />
    </ScrollView>
  );
};
