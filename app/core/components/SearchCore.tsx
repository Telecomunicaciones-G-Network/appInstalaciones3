import { Ionicons } from "@expo/vector-icons";
import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { View } from "react-native";
import tw from "twrnc";
import { OrdenesParams } from "../class/OrdenesParams";
import { useDispatch } from "react-redux";
import { fetchOrdenes } from "../../store/Ordenes/Thunks";

export const SearchCore = () => {
  const dispatch = useDispatch<any>()
  const params=new OrdenesParams()
  const [value, setValue] = useState("");

  const handleInput = (text: any) => {
    params.search = text
    setValue(text);
    dispatch(fetchOrdenes(params))
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
