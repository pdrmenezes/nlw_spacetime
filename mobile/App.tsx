import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-content">
      <Text className="text-gray-50 font-bold text-5xl">Hello World</Text>
      // opções diferentes pra a StatusBar (translucent fica com a cor dos elementos por trás, transparente)
      <StatusBar translucent />
    </View>
  );
}
