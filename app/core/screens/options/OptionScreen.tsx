import { useState } from "react";
import { Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import tw from 'twrnc';

export const OptionScreen = () => {
  const [checked, setChecked] = useState("first");
  return (
    <View style={[tw`px-2 pt-3`,{flex:1}]}>
      <Text style={tw`text-xl`}>Opciones</Text>
      <Text style={tw`text-gray-500 mb-3`}>opciones y el motivo para la cancelar la orden</Text>
      <RadioButton.Group
        onValueChange={(value) => setChecked(value)}
        value={checked}
      >
        <RadioButton.Item label="Primero item" value="first" />
        <RadioButton.Item label="Segundo item" value="second" />
        <RadioButton.Item label="Tercero item" value="tercero" />
        <RadioButton.Item label="Cuarto item" value="cuarto" />
      </RadioButton.Group>
      <Button mode="contained" style={tw`rounded-xl mt-5`} onPress={()=>console.log('llegue')}> Cancelar orden</Button>
    </View>
  );
};
