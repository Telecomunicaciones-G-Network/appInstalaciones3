import { View, Text } from "react-native";
import { HeadersCore } from "../components/HeadersCore";
import { ListCore } from "../components/ListCore";
import tw from "twrnc";
import { useTheme } from "@ui-kitten/components";
import { ModalFiltroFecha } from "../components/ModalFiltroFecha";
import { Splash } from "../../helpers/Splash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOrdenes } from "../../store/Ordenes/Thunks";

export const CoreScreen = () => {
  const dispatch = useDispatch<any>();
  const getOrdenes = () => {
    dispatch(fetchOrdenes(''));
  };

  useEffect(() => {
    getOrdenes();
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        <HeadersCore />
        <ListCore />
      </View>
      <ModalFiltroFecha />
      <Splash />
    </>
  );
};
