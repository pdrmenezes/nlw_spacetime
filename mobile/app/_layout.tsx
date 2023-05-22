import { styled } from "nativewind";
import * as SecureStore from "expo-secure-store";
import blurBg from "../src/assets/mobile-bg-blur.png";
import Stripes from "../src/assets/stripes.svg";
import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";
import { ImageBackground } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

const StyledStripes = styled(Stripes);

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    undefined | boolean
  >(undefined);

  const [fontsHaveLoaded] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setIsUserAuthenticated(!!token);
    });
  }, []);

  if (!fontsHaveLoaded) return <SplashScreen />;

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-spacetime_gray-900"
      imageStyle={{ position: "absolute", left: "-130%" }}
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  );
}
