import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { Text, View, Animated, Easing } from "react-native";
import * as Location from "expo-location";
import tw from "twrnc";
import { getLocation } from "../../libs/GetLocation";

export const MyLocation = () => {
  const [animation] = useState(new Animated.Value(1));
  const [colorAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    const blinkingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 0.3,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    );

    blinkingAnimation.start();

    return () => {
      blinkingAnimation.stop();
    };
  }, [animation]);

  useEffect(() => {
    let interval;
    // Configurar el intervalo para obtener la ubicación cada 3 minutos
    interval = setInterval(getLocation, 120000);
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={tw`flex-row items-center`}>
      <View style={tw`mr-2`}>
        <Animated.View
          style={[
            tw`text-green-500`,
            {
              opacity: animation,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <MaterialIcons name="my-location" size={24} color="#00ac00" />
        </Animated.View>
      </View>
      <View>
        <Text style={tw`text-xl`}>Grupo 1</Text>
      </View>
    </View>
  );
};
