import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Portal, Modal as ModalPaper } from "react-native-paper";
import tw from "twrnc";

interface Props {
  isVisible: boolean;
  onChange: (e: boolean) => void;
  message: string | React.ReactNode;
  title?: string | React.ReactNode;
  actions?: React.ReactNode | JSX.Element | React.ReactElement;
}

export const ModalComponent = ({
  isVisible,
  onChange,
  message,
  title,
  actions,
}: Props) => {
  const hideModal = () => onChange(false);

  return (
    <Portal>
      <ModalPaper
        visible={isVisible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <Text style={tw`mb-7 font-semibold `}>{title}</Text>
        {typeof message == "string" ? <Text style={tw`text-xl`}>{message}</Text> : message}
        <View style={tw`flex  items-end mt-10 mb-3`}>
          <Text style={tw` font-semibold`}>{actions}</Text>
        </View>
      </ModalPaper>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "85%",
    alignSelf: "center",
  },
});
