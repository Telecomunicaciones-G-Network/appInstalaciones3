import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@ui-kitten/components";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";

export const NoHayNadaParaMostrar = () => {
  const theme = useTheme();
  const s = theme["color-success-500"];
  const w = theme["color-warning-500"];
  const i = theme["color-info-500"];

  const [image, setImage] = useState<any>(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      const { uri } = result.assets[0];
      setImage(uri);
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={[
          tw`flex justify-center h-56 w-68 items-center rounded-md border-2 border-gray-300 border-dashed`,
          { flexBasis: 285 },
        ]}
      >
        {image ? (
          <Image source={{ uri: image }} style={tw`h-56 w-72 `} />
        ) : (
          <Text>No hay nada para mostrar</Text>
        )}
      </View>
      <View
        style={[tw`flex justify-center items-center pl-3`, { flexBasis: 40 }]}
      >
        <TouchableOpacity activeOpacity={0.5} onPress={pickImage}>
          {image ? (
            <Ionicons name="create" size={26} style={{ color: w }} />
          ) : (
            <Ionicons name="add-circle" size={26} style={{ color: s }} />
          )}
        </TouchableOpacity>
        {image && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={pickImage}
            style={tw`mt-10`}
          >
            <Ionicons name="save" size={26} style={{ color: i }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
