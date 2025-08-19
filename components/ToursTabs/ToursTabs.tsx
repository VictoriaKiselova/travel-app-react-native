import { View, Text, TouchableOpacity } from "react-native";
import { useToursContext } from "../Context/ToursContext";

export default function ToursTabs() {
  const {
    category,
    setCategory,
    setSearchQuery,
    setFilters,
    isOpenFilters,
    setIsOpenFilters,
  } = useToursContext();

  const handleSetCategory = (value: string) => {
    setCategory(value);
    setSearchQuery("");
    setFilters({
      country: null,
      nutrition: null,
      peopleCount: null,
      childrenCount: null,
      nights: null,
      transport: null,
    });
    setIsOpenFilters(false);
  };

  return (
    <View className="flex flex-row flex-wrap gap-2 items-center w-full max-w-[375px] pb-0 mb-3">
      <TouchableOpacity
        onPress={() => handleSetCategory("all")}
        className={`py-2 px-6 rounded-3xl justify-center items-center ${
          category === "all" && !isOpenFilters ? "bg-blue-600" : "bg-blue-400"
        }`}>
        <Text className="text-[14px] text-white text-center">Всі тури</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSetCategory("popular")}
        className={`py-2 px-6 rounded-3xl justify-center items-center ${
          category === "popular" && !isOpenFilters
            ? "bg-blue-600"
            : "bg-blue-400"
        }`}>
        <Text className="text-[14px] text-white text-center">Популярні</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSetCategory("hot-tours")}
        className={`py-2 px-6 rounded-3xl justify-center items-center ${
          category === "hot-tours" && !isOpenFilters
            ? "bg-blue-600"
            : "bg-blue-400"
        }`}>
        <Text className="text-[14px] text-white text-center">Гарячі</Text>
      </TouchableOpacity>
    </View>
  );
}
