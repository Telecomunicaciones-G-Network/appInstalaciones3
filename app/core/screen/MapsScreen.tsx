import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export const MapsScreen = ({ route }: any) => {
  const latLng = route.params!;
  return (
    <View style={{ flex: 1 }}>
      <Text>MapsScreen</Text>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: Number(latLng.lat),
            longitude: Number(latLng.lng),
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: Number(latLng.lat), longitude: Number(latLng.lng) }}
            title={latLng.nombre}
          />
        </MapView>
      </View>
    </View>
  );
};
