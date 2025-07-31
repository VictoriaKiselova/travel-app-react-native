import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tour } from "@/types/tours";

interface ITourHeaderProps {
  tourDetails: Tour | null;
}
export default function TourHeader({ tourDetails }: ITourHeaderProps) {
  if (!tourDetails) return null;

  return (
    <View className="mb-1">
      <Text className="text-blue-900 font-[500] text-[18px] leading-[1] text-center mb-1">
        {tourDetails?.tourTitle ?? ""}
      </Text>
      <Text className="text-blue-900 font-[400] text-[13px] leading-[1] text-center mb-2">
        {tourDetails?.tourDescription}
      </Text>
      <View className="flex-row items-end gap-[2px] flex-wrap mb-1">
        <View className="flex-row items-end flex-wrap mr-[2px]">
          <MaterialCommunityIcons name="star" size={20} color="#588fe8" />
          <Text className="text-blue-700 font-[400] text-[14px] leading-[1] text-left">
            {tourDetails?.hotel.stars ?? ""}
          </Text>
        </View>
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          {tourDetails?.hotel.name ?? ""},
        </Text>
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          {tourDetails?.city ?? ""}, {tourDetails?.country ?? ""}
        </Text>
      </View>
    </View>
  );
}
