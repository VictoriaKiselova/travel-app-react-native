import { View, Text, TouchableOpacity } from "react-native";
import { useToursContext } from "../Context/ToursContext";

export default function ToursTabs() {
  const { category, setCategory } = useToursContext();

  return (
    <View className="flex flex-row flex-wrap gap-2 items-center w-full max-w-[375px] pb-3">
      <TouchableOpacity
        onPress={() => setCategory("all")}
        className={`py-2 px-6 rounded-3xl justify-center items-center ${
          category === "all" ? "bg-blue-600" : "bg-blue-400"
        }`}>
        <Text className="text-[14px] text-white text-center">Всі тури</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCategory("popular")}
        className={`py-2 px-6 rounded-3xl justify-center items-center ${
          category === "popular" ? "bg-blue-600" : "bg-blue-400"
        }`}>
        <Text className="text-[14px] text-white text-center">Популярні</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCategory("hot-tours")}
        className={`py-2 px-6 rounded-3xl justify-center items-center ${
          category === "hot-tours" ? "bg-blue-600" : "bg-blue-400"
        }`}>
        <Text className="text-[14px] text-white text-center">Гарячі</Text>
      </TouchableOpacity>
    </View>
  );
}
