import { Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button } from "react-native-paper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { LoadingSpinner } from "../../../../../components/LoadingSpinner";

export const MapClient = () => {
  const { contrato } = useSelector((d: RootState) => d.contratoID);
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState({
    latitude: 10.595500188663145,
    longitude: -66.98736113336186,
  });

  const mapRef: any = useRef(null);

  useEffect(() => {
    setLocation({
      latitude: Number(contrato?.latitude),
      longitude: Number(contrato?.longitude),
    });
    setTimeout(() => {
      setIsLoading(false)
      handleCenterMap();
    }, 700);
  }, [contrato]);

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
    bottom: 10,
    right: 10,
  },
});
