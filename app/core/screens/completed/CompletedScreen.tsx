import { Text, View } from "react-native";
import { theme } from "../../../../App";
import tw from 'twrnc';

export const CompletedScreen = () => {
  return (
    <View style={[tw`px-2 `,{flex:1,backgroundColor: theme.colors.default}]}>
      <Text>Complete screen</Text>
    </View>
  );
};
