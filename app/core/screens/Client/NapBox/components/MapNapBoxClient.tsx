import { Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useRef } from "react";
import { Button } from "react-native-paper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

type Props = {};

export const MapNapBoxClient = (props: Props) => {
  const mapRef: any = useRef(null);

  const handleCenterMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: 10.598341519280531,
        longitude: -66.96151019780149,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      });
    }
  };
  return (
    <View style={tw`flex-1 `}>
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={{
          latitude: 10.598341519280531,
          longitude: -66.96151019780149,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: 10.598341519280531,
            longitude: -66.96151019780149,
          }}
          title="Prueba"
        />
      </MapView>
      <Button mode="contained" style={styles.button} onPress={handleCenterMap}>
        <FontAwesome5 name="map-marker-alt" size={20} color="white" />
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
