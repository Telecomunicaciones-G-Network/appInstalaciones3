import { Ionicons } from "@expo/vector-icons";
import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { View } from "react-native";
import tw from "twrnc";
import { OrdenesParams } from "../class/OrdenesParams";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdenes } from "../../store/Ordenes/Thunks";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";

export const SearchCore = () => {
  const dispatch = useDispatch<any>();
  const { desde, hasta, type } = useSelector((d: SelectorInterface) => d.core);
  const params = new OrdenesParams();
  const [value, setValue] = useState("");

  const handleInput = (text: any) => {
    params.search = text;
    if (text.length === 0) {
      params.since = desde;
      params.until = hasta;
    } else {
      delete params.since;
      delete params.until;
    }

    type && (params.type = type);
    setValue(text);
    dispatch(fetchOrdenes(params));
  };

  return (
    <View style={tw` mb-3`}>
      <Input
        value={value}
        label="Buscador"
        placeholder="Buscador de ordenes"
        style={tw`bg-white`}
        accessoryRight={
          <Ionicons name="search" size={20} style={{ color: "red" }} />
        }
        onChangeText={handleInput}
      />
    </View>
  );
};
