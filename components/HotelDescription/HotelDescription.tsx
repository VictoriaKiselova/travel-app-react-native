import { View, Text } from "react-native";
import { ITour } from "@/types/tours";

interface ITourHeaderProps {
  tourDetails: ITour | null;
}

export default function HotelDescription({ tourDetails }: ITourHeaderProps) {
  return (
    <View className="border-b border-b-blue-700 pb-4 mb-4">
      <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left mb-1">
        Опис готелю:
      </Text>
      <Text className="text-blue-900 font-[400] text-[14px] leading-[1.2] text-left">
        {tourDetails?.hotel.hotelDescription}
      </Text>
    </View>
  );
}
