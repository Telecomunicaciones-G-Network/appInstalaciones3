import { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Selector, useSelector } from "react-redux";
import { SelectorInterface } from "../interfaces/SelectorInterfaces";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

export const Splash = () => {
  const {isOpen} = useSelector((d:SelectorInterface)=>d.splash)

  

  return (
    <View>
      <Spinner
        visible={isOpen}
        textContent={"Cargando..."}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});
