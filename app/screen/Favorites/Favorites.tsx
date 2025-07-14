import { useToursContext } from "@/components/Context/ToursContext";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import GoBack from "@/components/GoBack/GoBack";

export default function Favorites() {
  const { isFavorites, setIsFavorites } = useToursContext();

  return (
    <GradientLayout>
      <View className="p-3 pb-0">
        <GoBack />
        {isFavorites ? (
          <View>
            <Text>Favorites</Text>
          </View>
        ) : (
          <View className="p-3 pb-0 flex-col justify-center items-center gap-1">
            <Text className="text-black-500 font-[500] text-[12px] text-center flex-shrink tracking-wide leading-tight">
              Упс! Ви ще не маєте улюблених турів.
            </Text>
            <Text className="text-black-500 font-[500] text-[12px] text-center flex-shrink tracking-wide leading-tight">
              Додайте ті, що сподобалися.
            </Text>
            <MaterialIcons name="favorite" size={24} color="orange" />
          </View>
        )}
      </View>
    </GradientLayout>
  );
}
