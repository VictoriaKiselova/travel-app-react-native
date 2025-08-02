import { View, Text } from "react-native";
import { ITour, IReview } from "@/types/tours";
import Loader from "../Loader/Loader";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ITourHeaderProps {
  tourDetails: ITour | null;
}

export default function HotelReviews({ tourDetails }: ITourHeaderProps) {
  if (!tourDetails) {
    return <Loader />;
  }

  return (
    <View className="flex-1 flex-col gap-3">
      <Text className="text-blue-900 font-[600] text-[14px] leading-[1] text-left">
        Відгуки:
      </Text>
      {tourDetails?.reviews.map((review: IReview) => (
        <View
          className="border border-blue-700 rounded-2xl py-2 px-3"
          key={review._id}>
          <View className="flex-row items-center gap-2 mb-1">
            <MaterialCommunityIcons name="account" size={16} color="#588fe8" />
            <Text className="text-blue-700 font-[500] text-[14px] leading-[1]">
              {review.user}
            </Text>
          </View>

          <View className="flex-row items-center gap-2 mb-1">
            <MaterialCommunityIcons
              name="star-outline"
              size={16}
              color="#fbbf24"
            />
            <Text className="text-blue-900 font-[400] text-[14px] leading-[1]">
              Оцінка: <Text className="text-blue-700">{review.rating}</Text>
            </Text>
          </View>

          <View className="flex-row items-start gap-2">
            <MaterialCommunityIcons
              name="message-text-outline"
              size={16}
              color="#588fe8"
            />
            <Text className="text-blue-900 font-[400] text-[14px] leading-[1]">
              {review.comment}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
