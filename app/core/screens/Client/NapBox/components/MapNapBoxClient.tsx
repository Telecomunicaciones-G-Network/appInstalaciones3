import { Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type Props = {};

export const MapNapBoxClient = (props: Props) => {
  return (
    <View style={tw`flex-1 `}>
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        provider={PROVIDER_GOOGLE}
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
    </View>
  );
};
