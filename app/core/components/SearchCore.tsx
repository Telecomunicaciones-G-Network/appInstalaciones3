import { Ionicons } from "@expo/vector-icons";
import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { View } from "react-native";
import tw from 'twrnc';

export const SearchCore = () => {
    const [value, setValue] = useState("");
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
        onChangeText={(nextValue) => setValue(nextValue)}
      />
    </View>
  );
};
