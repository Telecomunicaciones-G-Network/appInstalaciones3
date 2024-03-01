import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
} from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { ClienteViews } from "../views/cliente/ClienteViews";
import { AprovisionamientoViews } from "../views/aprovisionamiento/AprovisionamientoViews";
import { ImagenesViews } from "../views/imagenes/ImagenesViews";
import tw from "twrnc";
import { FinalizacionView } from "../views/finalizacion/FinalizacionView";
import Storage from "../../libs/storage";
import { coreApi } from "../../api/CoreApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdOrden } from "../../store/Ordenes/Thunks";
import { SelectorInterface } from "../../interfaces/SelectorInterfaces";
import { toggleCargandoParam } from "../../store/splash/splashSlice";
import { ScrollView } from "react-native";
import { Splash } from "../../helpers/Splash";

const Tab = createBottomTabNavigator();

interface Props extends BottomTabScreenProps<any, any> {}
const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab
      title="CLIENTE"
      icon={<Ionicons size={20} name="person" />}
    />
    <BottomNavigationTab
      title="RED"
      icon={<Ionicons size={20} name="stats-chart" />}
    />
    <BottomNavigationTab
      title="FINALIZACION"
      icon={<Ionicons size={20} name="close-circle" />}
    />
    <BottomNavigationTab
      title="IMAGENES"
      icon={<Ionicons name="images" size={20} />}
    />
  </BottomNavigation>
);

export const CoreRouters = ({ route }: Props) => {
  const id = route.params ? route.params?.id : 0;
  const dispatch = useDispatch<any>();
  const getCliente = (idOrden: any) => {
    dispatch(fetchIdOrden(idOrden));
  };

  useEffect(() => {
    getCliente(id);
  }, [id]);

  return (
    <>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen
          name="cliente"
          component={ClienteViews}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="red"
          component={AprovisionamientoViews}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="finalizacion"
          component={FinalizacionView}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="imagenes"
          component={ImagenesViews}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};
