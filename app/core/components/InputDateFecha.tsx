import { Ionicons } from "@expo/vector-icons";
import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import tw from "twrnc";

export const InputDateFecha = () => {
  const [value, setValue] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const fecha = new Date(date);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const formater = `${dia}-${mes}-${anio}`;
    setValue(formater);
    hideDatePicker();
  };
  return (
    <View style={tw`my-3`}>
      <Input
        value={value}
        label="Fecha"
        placeholder="Place your Text"
        accessoryRight={
          <TouchableOpacity activeOpacity={0.5} onPress={showDatePicker}>
            <Ionicons name="calendar" size={20} />
          </TouchableOpacity>
        }
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
