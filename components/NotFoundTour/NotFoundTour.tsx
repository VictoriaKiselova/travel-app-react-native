import { View, Text } from "react-native";
import GradientLayout from "../GradientLayout/GradientLayout";

export default function NotFoundTour() {
  return (
    <GradientLayout>
      <View className="p-3 pb-0">
        <Text className="text-center text-gray-500 text-[16px]">
          Нічого не знайдено
        </Text>
      </View>
    </GradientLayout>
  );
}
