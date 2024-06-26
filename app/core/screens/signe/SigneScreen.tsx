import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import tw from "twrnc";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";



export const SigneScreen = () => {


  return (
    <View
      style={[
        tw`px-2`,
        { flex: 1, justifyContent: "center", alignContent: "center" },
      ]}
    >
      

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

