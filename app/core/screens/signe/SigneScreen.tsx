import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { PanResponder, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import tw from "twrnc";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Svg, { Polyline } from "react-native-svg";
import { useState } from "react";

export const SigneScreen = () => {
  const [lines, setLines] = useState<any>([]);
  const [currentLine, setCurrentLine] = useState<any>([]);

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
  return (
    <View
      style={[
        tw`px-2`,
        { flex: 1, justifyContent: "center", alignContent: "center" },
      ]}
    >
      <View style={styles.container} {...panResponder.panHandlers}>
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
            points={currentLine.map((p:any) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </Svg>
      </View>

      <Button
        mode="contained"
        onPress={() => console.log("llegue")}
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
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  svg: {
    flex: 1,
  },
});
