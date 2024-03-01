import { ButtonGroup,Button ,Card, Text, useTheme } from "@ui-kitten/components";
import { Platform, View } from "react-native";
import tw from "twrnc";
import { NoHayNadaParaMostrar } from "./NoHayNadaParaMostrar";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { MostrarImagen } from "./MostrarImagen";

interface Props {
  title: string;
}

export const CardImagenes = ({ title }: Props) => {
  const theme = useTheme();
  
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
  

  const Header = (props: any): React.ReactElement => (
    <View {...props}>
      <Text category="h6">{title}</Text>
    </View>
  );
  return (
    <View style={tw`mx-2 mt-2`}>
      <Card header={Header}>
        <NoHayNadaParaMostrar />
        {/* <MostrarImagen/> */}
      </Card>
    </View>
  );
};
