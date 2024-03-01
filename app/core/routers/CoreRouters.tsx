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
import { FinalizacionView } from "../views/finalizacion/FinalizacionView";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIdOrden } from "../../store/Ordenes/Thunks";

import { fetchNap_box } from "../../store/cajaNap/Thunks";
import { fetchIdContratoId } from "../../store/contrato/Thunks";
import { fetchOpciones } from "../../store/instalacion/Thunks";

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
  const nap_box = route.params ? route.params?.nap_box : 0;
  const contractID = route.params ? route.params?.contract : 0;
  const dispatch = useDispatch<any>();
  const getCliente = (idOrden: any) => {
    dispatch(fetchIdOrden(idOrden));
    dispatch(fetchNap_box(nap_box));
    dispatch(fetchIdContratoId(contractID));
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
