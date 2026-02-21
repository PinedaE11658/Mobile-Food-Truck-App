import { View, Text, ScrollView, Pressable} from "react-native";
import {router, useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const menuItems = [
  { id: 1, name: "Tacos", price: "$5" },
  { id: 2, name: "Burritos", price: "$7" },
  { id: 3, name: "Quesadillas", price: "$6" },
];

function MenuItem({ id, name, price }: { id: string; name: string; price: string }) {
  return (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg font-semibold text-center">{name}</Text>
      <Text className="text-base text-gray-600 text-center">{price}</Text>
    </View>
  );
}

export default function Menu() {
    const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">  
    <View className="flex-1">
        <ScrollView className="flex-1 bg-white rounded-xl mb-4 p-4">
        <Text className="text-2xl self-center font-bold mb-4 text-center" >Menu</Text>
        <Text className="text-base mt-1 mb-4 text-center">Everything in this menu is fresh!</Text>

        {menuItems.map((item, index) => (
            <MenuItem 
            key={index}
            id={String(item.id)}
            name={item.name}
            price={item.price}
            />
        ))}
     </ScrollView>
        <Pressable
        onPress={() => router.push("/")}
        className="mt-6 bg-blue-500 px-4 py-2 rounded"
        >
            <Text className="text-white text-center">Go Back</Text>
        </Pressable>
     </View>
     </SafeAreaView> 
     );
    }