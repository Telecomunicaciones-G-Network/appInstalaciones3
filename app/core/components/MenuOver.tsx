import React from "react";
import { StyleSheet,  TouchableOpacity } from "react-native";
import {
  Layout,
  MenuItem,
  OverflowMenu,
  useTheme,
} from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { mostrarModalFecha } from "../../store/modals/modalFecha";
import { setType } from "../../store/core/coreSlice";

export const MenuOver = () => {
  const theme = useTheme();
const dispatch = useDispatch<any>()
  const [visible, setVisible] = React.useState(false);

  const onItemSelect = (index: any): void => {
    switch (index.row) {
      case 0:
        dispatch(mostrarModalFecha())
        break;
      case 1:
        dispatch(setType(false))
        break;
      case 2:
        dispatch(setType(41))
        break;
      case 3:
        dispatch(setType(42))
        break;

      default:
        break;
    }
    setVisible(false);
  };

  const renderToggleButton = (): React.ReactElement => (
    <TouchableOpacity
      onPress={() => setVisible(!visible)}
      style={{ backgroundColor: theme["color-primary-500"] }}
    >
      <Ionicons
        name="ellipsis-vertical"
        size={20}
        style={[tw`rounded-md`, { color: "white" }]}
      />
    </TouchableOpacity>
  );
  return (
    <Layout>
      <OverflowMenu
        anchor={renderToggleButton}
        visible={visible}
        style={tw`mt-1 `}
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}
      >
        <MenuItem
          title="Filtro por fecha"
          accessoryLeft={<Ionicons name="calendar" size={20} />}
        />
        <MenuItem
          title="Todos"
          accessoryLeft={<Ionicons name="arrow-redo" size={20} />}
        />
        <MenuItem
          title="No finalizada"
          accessoryLeft={<Ionicons name="close-circle" size={20} color="black" />}
        />
        <MenuItem
          title="Finalizada"
          accessoryLeft={<Ionicons name="checkmark-circle" size={20} />}
        />
      </OverflowMenu>
    </Layout>
  );
};

const styles = StyleSheet.create({});
