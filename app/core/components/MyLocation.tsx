import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, Animated, Easing, AppState } from "react-native";
import * as Location from "expo-location";
import tw from "twrnc";
import { getLocation } from "../../libs/GetLocation";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { patchOrdenFallow } from "../../store/Ordenes/Thunks";
import { useUser } from "../hooks/useUser";
import * as BackgroundFetch from "expo-background-fetch";

export const MyLocation = () => {
  const appState = useRef(AppState.currentState);
  const { getUser } = useUser();
  const { idAllow } = useSelector((d: RootState) => d.ordenActive);
  const [animation] = useState(new Animated.Value(1));
  const [name, setName] = useState("");

  const getLocati = async () => {
    const coords: any = await getLocation();
    console.log(coords);

    patchOrdenFallow(idAllow, {
      coordinate: `${coords.latitude}, ${coords.longitude}`,
      longitude: coords.longitude,
      latitude: coords.latitude,
    }).then((d) => {});
  };

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

  const handleUser = async () => {
    const { name: nameUser }: any = await getUser();
    setName(nameUser);
  };

  useEffect(() => {
    handleUser();

    let interval;
    interval = setInterval(async () => {
      await getLocati();
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      getLocati();
    });

    return () => {
      subscription.remove();
    };
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
        <Text style={tw`text-xl`}>{name}</Text>
      </View>
    </View>
  );
};
