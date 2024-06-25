import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchOpciones } from "../../../store/instalacion/Thunks";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { ButtonOption } from "./components/ButtonOption";

export const OptionScreen = () => {
  const [checked, setChecked] = useState("");
  const { isLoading, opciones } = useSelector((d: RootState) => d.opciones);
  const dispatch = useDispatch<AppDispatch>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchOpciones());
    setRefreshing(false);
  }, []);
  useEffect(() => {
    dispatch(fetchOpciones());
  }, []);

  return (
    <ScrollView
      style={tw`p-4`}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={[tw` pt-3`, { flex: 1 }]}>
        <Text style={tw`text-xl`}>Opciones</Text>
        <Text style={tw`text-gray-500 mb-3`}>
          opciones y el motivo para la cancelar la orden
        </Text>
        <View style={tw`bg-white rounded-xl shadow-md pb-7`}>
          {isLoading ? (
            <View style={[tw`my-20`, { flex: 1 }]}>
              <LoadingSpinner />
            </View>
          ) : (
            <>
              <RadioButton.Group
                onValueChange={(value) => {

                  setChecked(value);
                }}
                value={checked}
              >
                {opciones.map((d) => (
                  <RadioButton.Item
                  key={d.id}
                    label={d.name}
                    value={d.id.toString()}
                    style={tw`my-1`}
                  />
                ))}
              </RadioButton.Group>
              <ButtonOption selectedIndex={checked} />
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
