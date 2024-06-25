import { Text, View } from "react-native";
import { List } from "react-native-paper";
import tw from 'twrnc';
import { theme } from "../../../../../../App";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

export const DetailRed = () => {
  const {serviceDetail } = useSelector(
    (d: RootState) => d.contratoID
  );
  
  
  return (
    <View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>IP</Text>
          )}
          description={serviceDetail?serviceDetail.ip:'No posee IP'}
          left={(props) => (
            <List.Icon {...props} icon="ip-network" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>MAC</Text>
          )}
          description={serviceDetail?serviceDetail.mac:'No posee MAC'}
          left={(props) => (
            <List.Icon {...props} icon="router-network" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>ppUser</Text>
          )}
          description={serviceDetail?serviceDetail.pppassw:'No posee IP'}
          left={(props) => (
            <List.Icon {...props} icon="account-key" color={theme.colors.primary} />
          )}
        />
      </View>
      <View style={tw`bg-white shadow-md rounded-xl my-1`}>
        <List.Item
          title={() => (
            <Text style={{ color: theme.colors.secondary }}>Serial</Text>
          )}
          description={serviceDetail?serviceDetail.serial:'No posee IP'}
          left={(props) => (
            <List.Icon {...props} icon="barcode" color={theme.colors.primary} />
          )}
        />
      </View>
    </View>
  );
};
