import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { Layout, Tab, TabView, Text, Icon, useTheme } from "@ui-kitten/components";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";
import { CajaNapAprovisionamiento } from "./CajaNapAprovisionamiento";
import { Aprovisionado } from "./Aprovisionado";

export const TabAprovisionamiento = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
    const theme =useTheme()
  const shouldLoadComponent = (index: any): boolean => index === selectedIndex;
  return (
    
      <TabView
        selectedIndex={selectedIndex}
        shouldLoadComponent={shouldLoadComponent}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab
          title="RED"
          icon={<FontAwesome name="wifi" size={20} />}
        >
          <View style={styles.tabContainer} >
            <Aprovisionado/>
          </View>
        </Tab>
        <Tab title="CAJA NAP" icon={<FontAwesome name="cube" size={20} />}>
          <View style={styles.tabContainer} >
            <CajaNapAprovisionamiento/>
          </View>
        </Tab>
      </TabView>
    
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: "100%",
    
  },
});
