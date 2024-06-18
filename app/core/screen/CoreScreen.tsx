import { View, Text } from "react-native";
import { HeadersCore } from "../components/HeadersCore";
import { ListCore } from "../components/ListCore";
import { ModalFiltroFecha } from "../components/ModalFiltroFecha";
import { Splash } from "../../helpers/Splash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdenes } from "../../store/Ordenes/Thunks";
import { fetchOpciones } from "../../store/instalacion/Thunks";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";
import { OrdenesParams } from "../class/OrdenesParams";


export const CoreScreen = () => {
  const dispatch = useDispatch<any>();
  const params = new OrdenesParams();
  const { desde, hasta, type } = useSelector((d: SelectorInterface) => d.core);
  const getOrdenes = (params: any) => {
    dispatch(fetchOrdenes(params));
    dispatch(fetchOpciones());
  };
  

  useEffect(() => {
    params.since = desde;
    params.until = hasta;
    type && (params.status = type);
    getOrdenes(params);
  }, [desde, hasta, type]);

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
