import { Text, View } from "react-native";
import MapView from "react-native-maps";

export const MapsScreen = () => {
  return (
    <View>
      <Text>MapsScreen</Text>
      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
