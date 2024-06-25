import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Platform, Text, View } from "react-native";
import { Button } from "react-native-paper";
import tw, { style } from "twrnc";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { coreApi } from "../../../api/CoreApi";
import { SuccessToast } from "react-native-toast-message";
import { ToastError, ToastSuccess } from "../../../libs/Toast";
import { theme } from "../../../../App";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ImageScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title }: any = route.params;
  const [image, setImage] = useState<any>(null);
  const [porGuardar, setPorGuardar] = useState<any>(false);
  const [image64, setImage64] = useState<any>(null);
  const { contrato } = useSelector((d: RootState) => d.contratoID);
  const dispatch = useDispatch<AppDispatch>();
  const img = false;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      const { uri } = result.assets[0];
      const extension = uri.split(".").pop()!.toLowerCase();
      if (extension === "jpg" || extension === "png" || extension === "jpeg") {
        const fileContent = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        setImage64(fileContent);
        setPorGuardar(true);
        setImage(uri);
      }
    }
  };

  const handleNavigation = () => {
    navigation.navigate("Imagen" as never);
  };

  const saveImage = () => {
    if (!contrato) return;
    if (!image) return ToastError('Debes ingresar una imagen');
    
    const extension = image.split(".").pop()!.toLowerCase();
    const body: any = {
      order: contrato!.installation_order,
      detail: title,
    };
    body.files = [
      {
        [extension]: [`data:image/jpeg;base64,${image64}`],
      },
    ];
    return 

    coreApi
      .post("/api/gsoft/installations/image/", body)
      .then((result) => {
        ToastSuccess("Imagen guardar con éxito");
        // setPorGuardar(false);
        // dispatch(ocultarCargando());
        // dispatch(fetchIdOrden(ordenID.id));
      })
      .catch((err) => {
        
        // dispatch(ocultarCargando());
      });
  };

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title, navigation]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permiso denegado para acceder a la galería de fotos.");
        }
      }
    })();
  }, []);

  return (
    <View
      style={[
        tw`px-2`,
        { flex: 1, justifyContent: "center", alignContent: "center" },
      ]}
    >
      <TouchableOpacity
        style={tw`bg-white rounded-xl shadow-md p-3 mb-4`}
        onPress={pickImage}
      >
        {image ? (
          <Image source={{ uri: image }} style={tw`h-120 w-80`} />
        ) : (
          <>
            {img ? (
              <Image source={{ uri: img }} style={tw`h-120 w-80`} />
            ) : (
              <NoImage />
            )}
          </>
        )}
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={saveImage}
        style={[tw`rounded-lg mt-4 bg-green-500`]}
        icon={() => (
          <MaterialCommunityIcons name="content-save" size={24} color="white" />
        )}
      >
        Guardar Imagen
      </Button>
      {/* <Button mode="contained" onPress={handleNavigation} style={tw`rounded-lg`}>
        Volver
      </Button> */}
    </View>
  );
};

const NoImage = () => {
  return (
    <View style={tw`h-120 w-80 justify-center items-center`}>
      <FontAwesome6 name="image" size={60} color="#6b7280" />
      <Text style={tw`text-xl text-gray-500`}>Inserte una imagen</Text>
    </View>
  );
};
