import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { theme } from "../../../../../../App";

interface Props {
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
}

export const CardNapBoxClient = ({ content, icon, title }: Props) => {
  return (
    <View style={[tw`bg-white rounded-xl shadow-md`, styles.imageContainer]}>
      <Text style={tw`text-[10px] font-semibold text-gray-400`}>
        {title}
      </Text>
      <View style={tw`flex-row my-2 justify-between`}>
        <Text style={tw`text-xl font-semibold `}>{content}</Text>
        <Text style={tw`text-xl font-semibold `}>{icon}</Text>
      </View>
      <View
        style={[tw`border-b`, { borderBlockColor: theme.colors.primary }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "32%",
    marginBottom: 8,
    padding: 10,
  },
});
