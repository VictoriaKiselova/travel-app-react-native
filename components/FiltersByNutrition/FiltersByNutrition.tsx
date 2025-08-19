import { View, Text, TouchableOpacity } from "react-native";
import { Filters } from "@/types/filters";
import { Dispatch, SetStateAction } from "react";

type FiltersProps = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

export default function FiltersByNutrition({
  filters,
  setFilters,
}: FiltersProps) {
  const allNutrition = [
    "Ультра все включено",
    "Все включено",
    "Сніданок, обід, вечеря",
    "Сніданок та вечеря",
    "Сніданок",
    "Без харчування",
  ];

  return (
    <View className="mb-4">
      <Text className="text-blue-900 font-[400] text-[14px] leading-[1] text-left mb-2">
        Харчування:
      </Text>
      <View className="flex-row items-center flex-wrap gap-[6px] ">
        {allNutrition.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setFilters(prev => ({ ...prev, nutrition: item }))}
            className={`py-2 px-3 rounded-3xl justify-center items-center ${
              filters.nutrition === item ? "bg-pink-200" : "bg-pink-100"
            }`}>
            <Text className="text-[10px] text-center text-white">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
