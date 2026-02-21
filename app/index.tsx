import { View, Text, ScrollView, Pressable  } from "react-native";
import { useRouter } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
    <View className="flex-1">
      <ScrollView className="flex-1 bg-white rounded-xl mb-4 p-4">
        <Text className="text-2xl font-bold mb-4 text-center">Welcome to the Food Truck App!</Text>
        <Text className="text-base mt-1 mb-4 text-center">We have delicious fresh Mexican food!</Text>
      
      </ScrollView>
      <Pressable
          onPress={() => router.push("/menu")}
          className="mt-6 bg-blue-500 px-4 py-2 rounded"
          >
            <Text className="text-white text-center">View Menu</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
}