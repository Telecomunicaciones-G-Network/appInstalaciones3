import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserClient } from "./user/UserClient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../../../App";
import { RedClient } from "./red/RedClient";
import { ImageClient } from "./image/ImageClient";
import { NapBoxClient } from "./NapBox/NapBoxClient";
import AntDesign from "@expo/vector-icons/AntDesign";


const Tab = createBottomTabNavigator();
export const ClientScreen = () => {
  
  

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === "Cliente") {
            iconComponent = (
              <FontAwesome6 name="user-large" size={size} color={color} />
            );
          } else if (route.name === "Red") {
            iconComponent = (
              <MaterialCommunityIcons
                name="access-point-network"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Caja Nap") {
            iconComponent = (
              <AntDesign name="CodeSandbox" size={size} color={color} />
            );
          } else if (route.name === "Imagen") {
            iconComponent = (
              <FontAwesome6 name="image" size={size} color={color} />
            );
          }

          return iconComponent;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Cliente"
        options={{
          headerShown: false,
        }}
        component={UserClient}
      />
      <Tab.Screen
        name="Red"
        options={{
          headerShown: false,
        }}
        component={RedClient}
      />
      <Tab.Screen
        name="Caja Nap"
        options={{
          headerShown: false,
        }}
        component={NapBoxClient}
      />
      <Tab.Screen
        name="Imagen"
        options={{
          headerShown: false,
        }}
        component={ImageClient}
      />
    </Tab.Navigator>
  );
};
