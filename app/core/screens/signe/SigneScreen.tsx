import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Alert, PanResponder, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import tw from "twrnc";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Svg, { Polyline } from "react-native-svg";
import { useRef, useState } from "react";
import ViewShot from "react-native-view-shot";
import { patchContractId } from "../../../store/contrato/Thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchIdOrden } from "../../../store/Ordenes/Thunks";
import { mostrarCargando, ocultarCargando } from "../../../store/splash/splashSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ToastSuccess } from "../../../libs/Toast";

export const SigneScreen = () => {
  const [lines, setLines] = useState<any>([]);
  const [currentLine, setCurrentLine] = useState<any>([]);
  const viewShotRef = useRef<any>();
  const navigation = useNavigation()
  const {contrato} = useSelector((d:RootState)=>d.contratoID)
  const dispatch = useDispatch<AppDispatch>()
  
  
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setCurrentLine([
        ...currentLine,
        { x: gestureState.moveX, y: gestureState.moveY },
      ]);
    },
    onPanResponderRelease: () => {
      setLines([...lines, currentLine]);
      setCurrentLine([]);
    },
  });

  const handleNavigation = () => {
    if (contrato) {
      dispatch(fetchIdOrden(contrato.order_id));
      navigation.navigate("Imagen" as never);
      dispatch(ocultarCargando());
    }
  };

  const captureImage = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      handleRequest(uri)
    } catch (error) {
      Alert.alert("Error", "An error occurred while capturing the image.");
    }
  };

  const handleRequest=(img:any)=>{
    const body = {
        signe_base64:`data:image/png;base64,${img}`
    }
    
    dispatch(mostrarCargando());
    patchContractId(contrato?.id,body)
    .then((result) => {
        ToastSuccess("Firma guardada con éxito");
        handleNavigation()
    }).catch((err) => {
        console.log(err);
    });
  }
  return (
    <View
      style={[
        tw`px-2`,
        { flex: 1, justifyContent: "center", alignContent: "center" },
      ]}
    >
      <ViewShot
        ref={viewShotRef}
        options={{ format: "png", result: "base64", quality: 0.9 }}
        style={{ flex: 1 }}
      >
        <View  {...panResponder.panHandlers}>
          <Svg style={styles.svg}>
            {lines.map((line: any, index: any) => (
              <Polyline
                key={index}
                points={line.map((p: any) => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="black"
                strokeWidth="3"
              />
            ))}
            <Polyline
              points={currentLine.map((p: any) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
          </Svg>
        </View>
      </ViewShot>

      <Button
        mode="contained"
        onPress={captureImage}
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

const styles = StyleSheet.create({
  
  svg: {
    flex: 1,
  },
});
