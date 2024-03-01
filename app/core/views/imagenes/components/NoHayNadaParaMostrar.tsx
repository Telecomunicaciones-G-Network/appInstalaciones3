import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@ui-kitten/components";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";
import * as FileSystem from "expo-file-system";
import { coreApi } from "../../../../api/CoreApi";
import {
  mostrarCargando,
  ocultarCargando,
} from "../../../../store/splash/splashSlice";
import { fetchIdOrden } from "../../../../store/Ordenes/Thunks";
import { ToastSuccess } from "../../../../libs/Toast";

type extensiones = "jpg" | "png" | "jpeg";

export const NoHayNadaParaMostrar = ({
  title,
  img,
}: {
  title: string;
  img?: string;
}) => {
  const dispatch = useDispatch<any>();
  const { ordenID } = useSelector((d: SelectorInterface) => d.ordenesId);
  const theme = useTheme();
  const s = theme["color-success-500"];
  const w = theme["color-warning-500"];
  const i = theme["color-info-500"];

  const [image, setImage] = useState<any>(null);
  const [porGuardar, setPorGuardar] = useState<any>(false);
  const [image64, setImage64] = useState<any>(null);
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

  const saveImage = () => {
    if (!ordenID) return;
    dispatch(mostrarCargando());
    const extension = image.split(".").pop()!.toLowerCase();

    const body: any = {
      order: ordenID.contract.installation_order,
      detail: title,
    };
    body.files = [
      {
        [extension]: [`data:image/jpeg;base64,${image64}`],
      },
    ];
    coreApi
      .post("/api/gsoft/installations/image/", body)
      .then((result) => {
        ToastSuccess("Imagen guardar con exito");
        setPorGuardar(false);
        dispatch(ocultarCargando());
        dispatch(fetchIdOrden(ordenID.id));
      })
      .catch((err) => {
        console.log(err);
        dispatch(ocultarCargando());
      });
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
          <>
            {img ? (
              <Image source={{ uri: img }} style={tw`h-57 w-72`} />
            ) : (
              <Text>No hay nada para mostrar</Text>
            )}
          </>
        )}
      </View>
      <View
        style={[tw`flex justify-center items-center pl-3`, { flexBasis: 40 }]}
      >
        <TouchableOpacity activeOpacity={0.5} onPress={pickImage}>
          {img || image ? (
            <Ionicons name="create" size={26} style={{ color: w }} />
          ) : (
            <Ionicons name="add-circle" size={26} style={{ color: s }} />
          )}
        </TouchableOpacity>
        {porGuardar && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={saveImage}
            style={tw`mt-10`}
          >
            <Ionicons name="save" size={26} style={{ color: i }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
