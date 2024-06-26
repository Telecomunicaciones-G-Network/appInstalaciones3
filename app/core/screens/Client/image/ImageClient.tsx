import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../../../../../App";
import { Button, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchIdOrden } from "../../../../store/Ordenes/Thunks";

const titles = [
  {
    name: "Caja Abierta",
  },
  {
    name: "Caja Cerrada",
  },
  {
    name: "Midiendo potencia",
  },
  {
    name: "Foto de Instalación",
  },
];

export const ImageClient = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contrato } = useSelector((d: RootState) => d.contratoID);
  const { ordenID } = useSelector((d: RootState) => d.ordenesId);
  const [imagesOrder, setImagesOrder] = useState<any>([]);

  const navigation = useNavigation<any>();

  const handleMap = (title: string) => {
    navigation.navigate("image", { title });
  };

  const handleRequest = () => {
    if (contrato) {
      dispatch(fetchIdOrden(contrato.order_id));
    }
  };
  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <ScrollView>
      <View
        style={[tw`px-2`, { flex: 1, backgroundColor: theme.colors.default }]}
      >
        <View style={styles.container}>
          {titles.map((title) => {
            const filter = ordenID.image_order.find(
              (d: any) => d.detail == title.name
            );

            
            return (
              <View
                key={title.name}
                style={[
                  tw`bg-white rounded-xl shadow-md`,
                  styles.imageContainer,
                ]}
              >
                <Text style={tw`text-center mb-2`}>{title.name}</Text>
                <TouchableOpacity onPress={() => handleMap(title.name)}>
                  {!filter ? (
                    <NoImage />
                  ) : (
                    <Image
                      source={{ uri: filter.image }}
                      style={[
                        tw`h-50 w-40 rounded-xl`,
                        { alignSelf: "center" },
                      ]}
                    />
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
          <View
            style={[
              tw`bg-white rounded-xl shadow-md`,
              styles.imageContainerUnique,
            ]}
          >
            <Text style={tw`text-center mb-2`}>Firma del cliente</Text>
            <TouchableOpacity onPress={() => handleMap("Firma")}>
              {/* <Image
                source={require("../../../../../assets/img/PLANTILLA_PROMOCION.png")}
                style={[tw`h-80 w-80 rounded-xl`, { alignSelf: "center" }]}
              /> */}
              <NoImage unique />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const NoImage = ({ unique }: { unique?: boolean }) => {
  return (
    <View
      style={tw`${
        unique ? "h-80 w-full" : "h-50 w-full"
      } justify-center items-center border border-dashed rounded-lg  border-gray-500`}
    >
      <FontAwesome6 name="image" size={unique ? 30 : 30} color="#6b7280" />
      <Text style={tw` text-gray-500`}>Inserte una imagen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%",
    marginBottom: 25,
    padding: 10,
    overflow: "hidden",
  },
  imageContainerUnique: {
    width: "100%",
    marginBottom: 25,
    padding: 10,
  },
});
