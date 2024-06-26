import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";
import { fetchNap_box } from "../../../../store/cajaNap/Thunks";
import { RefreshControl, ScrollView } from "react-native";
import { fetchIdContratoId } from "../../../../store/contrato/Thunks";

export const ScrollViewApro = ({ children }: { children: JSX.Element }) => {
  const { napBox } = useSelector((d: SelectorInterface) => d.nap_box);
  const { contrato } = useSelector((d: SelectorInterface) => d.contratoID);
  const dispatch = useDispatch<any>();

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    if (napBox && contrato) {
      dispatch(fetchNap_box(napBox.id));
      dispatch(fetchIdContratoId(contrato.id));
    }
    setRefreshing(false);
  };
  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};
