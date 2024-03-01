import { RefreshControl, ScrollView, Text, View } from "react-native";
import { TabAprovisionamiento } from "./components/TabAprovisionamiento";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../../interfaces/SelectorInterfaces";
import { fetchNap_box } from "../../../store/cajaNap/Thunks";

export const AprovisionamientoViews = () => {
  return (
    <View>
      <TabAprovisionamiento />
    </View>
  );
};
