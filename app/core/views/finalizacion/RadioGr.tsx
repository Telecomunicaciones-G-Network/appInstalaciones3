import React, { useState } from "react";
import { SelectorInterface } from "../../../interfaces/SelectorInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { Radio, RadioGroup, useTheme } from "@ui-kitten/components";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Opciones } from "../../Interfaces/Opciones";
import { patchOpciones } from "../../../store/instalacion/Thunks";
import {
  mostrarCargando,
  ocultarCargando,
} from "../../../store/splash/splashSlice";

export const RadioGr = () => {
  const dispatch = useDispatch<any>();
  const { isLoading, opciones } = useSelector(
    (d: SelectorInterface) => d.opciones
  );
  const { ordenID } = useSelector((d: SelectorInterface) => d.ordenesId);

  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSubmit = () => {
    if (ordenID) {
      dispatch(mostrarCargando());
      const d = opciones[selectedIndex];
      patchOpciones(ordenID.id, d)
        .then(({ data, status }) => {
          dispatch(ocultarCargando());
          console.log(status);
        })
        .catch((err) => {
          dispatch(ocultarCargando());
          console.log(err);
        });
    }
  };

  return (
    <>
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        {opciones.map((d) => (
          <Radio status="danger" key={d.id}>
            <Text style={tw`font-semibold`}>{d.name}</Text>
          </Radio>
        ))}
      </RadioGroup>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          tw`flex justify-center items-center rounded-lg h-10 mt-10`,
          { backgroundColor: theme["color-primary-500"] },
        ]}
        onPress={onSubmit}
      >
        <Text style={tw`text-white font-semibold`}>Agregar Opcion</Text>
      </TouchableOpacity>
    </>
  );
};
