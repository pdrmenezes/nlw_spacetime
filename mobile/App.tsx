import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import blurBg from "./src/assets/mobile-bg-blur.png";
import Stripes from "./src/assets/stripes.svg";
import NlwLogo from "./src/assets/nlw-spacetime-logo.svg";
import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";
import { styled } from "nativewind";

const StyledStripes = styled(Stripes);

export default function App() {
  const [fontsHaveLoaded] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  });

  if (!fontsHaveLoaded) return null;

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-spacetime_gray-900 px-8 py-10"
      imageStyle={{ position: "absolute", left: "-130%" }}
    >
      <StyledStripes className="absolute left-2" />
      <View className="flex-1 items-center justify-center gap-6">
        <NlwLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-spacetime_gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-spacetime_gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-spacetime-green-500 rounded-full px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-spacetime_gray-200">
        Feito com 🤍 no NLW da Rocketseat
      </Text>

      <StatusBar translucent />
    </ImageBackground>
  );
}
