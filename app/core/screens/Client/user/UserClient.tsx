import React from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import { theme } from "../../../../../App";
import { AvatarClient } from "./components/AvatarClient";
import { CardClient } from "./components/CardClient";
import { DetailCliente } from "./components/DetailCliente";
import { MapClient } from "./components/MapClient";

export const UserClient = () => {
  return (
    <ScrollView>

      <View
        style={[
          tw`px-2 `,
          { flex: 1, backgroundColor: theme.colors.default, paddingBottom: 25 },
        ]}
      >
        <AvatarClient />
        <CardClient />
        <DetailCliente />        
        <View style={tw`h-60 bg-white mt-5 rounded-xl p-2`}>
          <MapClient />
        </View>
      </View>
    </ScrollView>
    
  );
};
