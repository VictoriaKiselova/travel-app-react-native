import { View, Text } from "react-native";
import { ITour } from "@/types/tours";

interface ITourHeaderProps {
  tourDetails: ITour | null;
}

export default function FeaturesList({ tourDetails }: ITourHeaderProps) {
  const featureslist = tourDetails?.hotel.amenities ?? [];

  return (
    <View className="border-b border-b-blue-700 pb-4 mb-5 flex-row flex-wrap gap-3">
      {featureslist.map((item, index) => (
        <Text
          key={index.toString()}
          className="py-2 px-5 rounded-3xl justify-center items-center bg-pink-100 text-white text-[12px]">
          {item}
        </Text>
      ))}
    </View>
  );
}
