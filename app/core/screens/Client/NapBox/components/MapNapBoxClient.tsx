import { Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-native-paper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { RootState } from "../../../../../store/store";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../../../../components/LoadingSpinner";

type Props = {};

export const MapNapBoxClient = (props: Props) => {
  const { napBox } = useSelector((d: RootState) => d.nap_box);
  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState({
    latitude: 10.595500188663145,
    longitude: -66.98736113336186,
  });

  const mapRef: any = useRef(null);

  useEffect(() => {
    setLocation({
      latitude: Number(napBox?.latitude),
      longitude: Number(napBox?.longitude),
    });
    setTimeout(() => {
      setIsLoading(isLoading);
      handleCenterMap();
    }, 1000);
  }, [napBox]);

  const handleCenterMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
      });
    }
  };
  return (
    <View style={tw`flex-1 `}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MapView
            style={{ ...StyleSheet.absoluteFillObject }}
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Prueba"
            />
          </MapView>
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleCenterMap}
          >
            <FontAwesome5 name="map-marker-alt" size={20} color="white" />
          </Button>
        </>
      )}
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
