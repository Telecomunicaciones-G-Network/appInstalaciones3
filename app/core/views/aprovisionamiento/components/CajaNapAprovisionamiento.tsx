import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";


import { Divider, List, ListItem, useTheme } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { SelectorInterface } from "../../../../interfaces/SelectorInterfaces";

export const CajaNapAprovisionamiento = () => {
  const {}=useSelector((d:SelectorInterface)=>d.ordenesId)
  const theme=useTheme()
  return (
    <View style={tw`p-2`}>
      <View style={tw`rounded-lg bg-white shadow-sm p-3`}>
        <ListItem
          title="Cajan Nap"
          description={()=><Text style={tw`ml-2 text-xl font-semibold`}>Nap-345-3</Text>}
          style={tw`py-7`}
          accessoryLeft={() => <Ionicons name="cube" size={25} />}
          accessoryRight={() => (
            <TouchableOpacity activeOpacity={0.5} style={[tw`p-2 rounded-lg`,{backgroundColor:theme['color-danger-500']}]}>
              <Text style={tw`text-white font-semibold`}>Editar</Text>
            </TouchableOpacity>
          )}
        />
        <Divider />
        <ListItem
          title="Detalles"
          style={tw`py-7`}
          accessoryLeft={() => <Ionicons size={25} name="information-circle" />}
          accessoryRight={() => <Text>Grupo 2</Text>}
        />
        <Divider />
        <ListItem
          title="Coordenadas"
          style={tw`py-7`}
          accessoryLeft={() => <Ionicons style={{color:theme['color-danger-500']}} size={25} name="locate" />}
          accessoryRight={() => <Text>04241703285</Text>}
        />
        <Divider />
        <ListItem
          title="Centro Comercial"
          style={tw`py-7`}
          accessoryLeft={() => <Ionicons  size={25} name="storefront" />}
          accessoryRight={() => <Text>Si</Text>}
        />
        <Divider />
        <ListItem
          title="Cantidad de puertos"
          style={tw`py-7`}
          accessoryLeft={() => <Ionicons size={25} name="layers" />}
          accessoryRight={() => <Text>Por Instalar</Text>}
        />
        <Divider />
        <ListItem
          title="Puertos ocupado"
          style={tw`py-7`}
          accessoryLeft={() => <Ionicons size={25} name="ban" style={{color:theme['color-danger-500']}}/>}
          accessoryRight={() => <Text>12</Text>}
        />
      </View>
    </View>
  );
};
