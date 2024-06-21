import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { Text, View, Animated, Easing } from "react-native";

import tw from "twrnc";

export const MyLocation = () => {
  const [animation] = useState(new Animated.Value(1));
  const [colorAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    const blinkingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 0.3,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
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





  return (
    <View style={tw`flex-row items-center`}>
      <View style={tw`mr-2`}>
        <Animated.View
          style={[tw`text-green-500`,
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
