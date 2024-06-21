import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../../App";

export const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator animating={true} color={theme.colors.primary} size={40} />
    </View>
  );
};
