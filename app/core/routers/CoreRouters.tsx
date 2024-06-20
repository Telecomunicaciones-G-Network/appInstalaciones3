import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { theme } from "../../../App";
import { OrderScreen } from "../screens/Order/OrderScreen";
import { CompletedScreen } from "../screens/completed/CompletedScreen";

const Tab = createBottomTabNavigator();
export const CoreRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === "Orden") {
            iconComponent = (
              <FontAwesome6 name="file-invoice" size={size} color={color} />
            );
          } else if (route.name === "Completadas") {
            iconComponent = (
              <FontAwesome6 name="clipboard-check" size={size} color={color} />
            );
          }

          return iconComponent;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Orden"
        options={{
          headerShown: false,
        }}
        component={OrderScreen}
      />
      <Tab.Screen
        name="Completadas"
        options={{
          headerShown: false,
        }}
        component={CompletedScreen}
      />
    </Tab.Navigator>
  );
};
