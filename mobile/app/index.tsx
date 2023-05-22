import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";
import NlwLogo from "../src/assets/nlw-spacetime-logo.svg";
import { api } from "../src/lib/api";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/646a8ecbc8128bbf5c5d",
};

export default function App() {
  const router = useRouter();

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: "646a8ecbc8128bbf5c5d",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "spacetime",
      }),
    },
    discovery
  );

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post("/register", { code });

    const { token } = response.data;
    await SecureStore.setItemAsync("token", token);

    router.push("/memories");
  }

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      handleGithubOAuthCode(code);
    }
  }, [response]);

  return (
    <View className="flex-1 items-center px-8 py-10">
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
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-spacetime_gray-200">
        Feito com 🤍 no NLW da Rocketseat
      </Text>
    </View>
  );
}
