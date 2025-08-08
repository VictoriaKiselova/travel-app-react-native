import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ITour } from "@/types/tours";

interface ITourHeaderProps {
  tourDetails: ITour | null;
}
export default function TourBasicInfo({ tourDetails }: ITourHeaderProps) {
  const nights = tourDetails?.duration;
  const foodOptions = tourDetails?.hotel.foodOptions[3];
  const totalPrice =
    ((Number(tourDetails?.hotel.priceDay) + Number(foodOptions?.extraPrice)) *
      Number(tourDetails?.duration) +
      Number(tourDetails?.transferType[0].Авіа.transportPrice)) *
    2;

  if (!tourDetails) return null;

  const getNightWord = (count: number): string => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "ночей";
    }
    if (lastDigit === 1) {
      return "ніч";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return "ночі";
    }
    return "ночей";
  };
  const nightWord = nights ? getNightWord(nights) : "";

  return (
    <View className="border-b border-b-blue-700 mb-4">
      <Text className="text-blue-900 font-[400] text-[13px] leading-[1] text-left mb-2">
        {tourDetails?.tourDescription}
      </Text>
      <View className="flex-row items-end flex-wrap mb-1">
        <MaterialCommunityIcons
          name="calendar-month"
          size={20}
          color="#588fe8"
          className="mr-1"
        />
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          Дати туру:{" "}
          <Text className="text-blue-900 font-[400] text-[14px] leading-[1] text-left">
            {tourDetails?.startDate
              .slice(0, 10)
              .split("-")
              .reverse()
              .join(".") ?? ""}{" "}
            по{" "}
            {tourDetails?.endDate.slice(0, 10).split("-").reverse().join(".") ??
              ""}
          </Text>
        </Text>
      </View>
      <View className="flex-row items-end flex-wrap mb-1">
        <MaterialCommunityIcons
          name="clock-time-four-outline"
          size={20}
          color="#588fe8"
          className="mr-1"
        />
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          Тривалість:{" "}
          <Text className="text-blue-900 font-[400] text-[14px] leading-[1] text-left">
            {tourDetails?.duration} {nightWord}
          </Text>
        </Text>
      </View>

      <View className="flex-row items-end flex-wrap mb-1">
        <MaterialCommunityIcons
          name="account-group"
          size={20}
          color="#588fe8"
          className="mr-1"
        />
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          Кількість учасників:{" "}
          <Text className="text-blue-900 font-[400] text-[14px] leading-[1] text-left">
            2
          </Text>
        </Text>
      </View>

      <View className="flex-row items-end flex-wrap mb-1">
        <MaterialCommunityIcons
          name="silverware-fork-knife"
          size={20}
          color="#588fe8"
          className="mr-1"
        />
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          Харчування:{" "}
          <Text className="text-blue-900 font-[400] text-[14px] leading-[1] text-left">
            {foodOptions?.description}
          </Text>
        </Text>
      </View>

      <View className="flex-row items-end flex-wrap mb-1">
        <MaterialCommunityIcons
          name="wallet"
          size={20}
          color="#588fe8"
          className="mr-1"
        />
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          Ціна за 2 дорослих (авіа):{" "}
          <Text className="text-blue-500 font-[500] text-[14px] leading-[1] text-left">
            {totalPrice} грн.
          </Text>
        </Text>
      </View>

      <View className="flex-row items-end flex-wrap mb-4">
        <MaterialCommunityIcons
          name="map-marker-path"
          size={20}
          color="#588fe8"
          className="mr-1"
        />
        <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left">
          Тип доїзду:{" "}
          <Text className="text-blue-900 font-[400] text-[14px] leading-[1] text-left">
            {tourDetails?.transferType &&
              Object.keys(tourDetails.transferType[0])
                .filter(key => key !== "departureCity" && key !== "_id")
                .map(type => <Text key={type}>{type} </Text>)}
          </Text>
        </Text>
      </View>
    </View>
  );
}
