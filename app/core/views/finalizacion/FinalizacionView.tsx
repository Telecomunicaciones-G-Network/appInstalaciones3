import { Radio, RadioGroup, useTheme } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { SelectorInterface } from "../../../interfaces/SelectorInterfaces";
import { Ionicons } from "@expo/vector-icons";
import { RadioGr } from "./RadioGr";
import { NoHayNadaParaMostrar } from "../imagenes/components/NoHayNadaParaMostrar";
import { Cargando } from "../../../components/Cargando";
import { RefreshControl } from "react-native-gesture-handler";
import { fetchOpciones } from "../../../store/instalacion/Thunks";

const data = [
  {
    id: 1,
    value: "Sin Pago",
  },
  {
    id: 2,
    value: "Sin factibilidad Tecnica",
  },
  {
    id: 3,
    value: "Restraso por instalacion anteriores",
  },
  {
    id: 4,
    value: "No se pudo contactar al cliente",
  },
  {
    id: 5,
    value: "Factor externo",
  },
  {
    id: 6,
    value: "Caja Full",
  },
];

export const FinalizacionView = () => {
  const { isLoading, opciones } = useSelector(
    (d: SelectorInterface) => d.opciones
  );
  const theme = useTheme();
  const dispatch = useDispatch<any>();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchOpciones());
    setRefreshing(false);
  }, []);

  return (
    <>
      <View
        style={[tw`h-24`, { backgroundColor: theme["color-primary-500"] }]}
      />
      <View style={tw`p-5 mt-[-80px]`}>
        <View>
          <Text style={[tw`text-2xl text-white font-semibold`]}>
            Cancelar Orden
          </Text>
          <Text style={[tw`text-sm text-white font-semibold`]}>
            Opciones para cancelar
          </Text>
        </View>

        <ScrollView
          style={tw`p-4`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <View style={tw`flex-1 justify-center items-center`}>
              <Cargando />
            </View>
          ) : opciones.length > 0 ? (
            <RadioGr />
          ) : (
            <View style={tw`flex-1  items-center`}>
              <Ionicons
                name="close-circle-outline"
                style={tw`text-gray-400 mt-2`}
                size={50}
              />
              <Text style={tw`text-lg text-gray-400 font-semibold`}>
                No hay nada para mostrar
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};
