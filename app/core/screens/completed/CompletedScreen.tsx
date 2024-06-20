import { Text, View } from "react-native";
import { theme } from "../../../../App";

export const CompletedScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.default }}>
      <Text>Complete screen</Text>
    </View>
  );
};
