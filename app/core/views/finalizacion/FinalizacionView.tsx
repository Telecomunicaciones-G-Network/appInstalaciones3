import { Radio, RadioGroup, useTheme } from "@ui-kitten/components";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

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
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <View
        style={[tw`h-24`, { backgroundColor: theme["color-primary-500"] }]}
      />
      <View style={tw`p-5 mt-[-80px]`}>
        <View>
          <Text style={[tw`text-2xl text-white font-semibold`]}>Cancelar Orden</Text>
          <Text style={[tw`text-sm text-white font-semibold`]}>Opciones para cancelar</Text>
        </View>

        <View style={tw`p-4`}>
          <RadioGroup
            selectedIndex={selectedIndex}
            onChange={(index) => setSelectedIndex(index)}
          >
            {data.map((d) => (
              <Radio status="danger" key={d.id}>
                <Text style={tw`font-semibold`}>{d.value}</Text>
              </Radio>
            ))}
          </RadioGroup>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              tw`flex justify-center items-center rounded-lg h-10 mt-10`,
              { backgroundColor: theme["color-primary-500"] },
            ]}
          >
            <Text style={tw`text-white font-semibold`}>Agregar Opcion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
