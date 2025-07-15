import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import { Tour } from "../../types/tours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FavoritesAddButton from "../FavoritesAddButton/FavoritesAddButton";

interface TourCardProps {
  tour: Tour;
}

export default function ToursCard({ tour }: TourCardProps) {
  const navigation = useNavigation<any>();
  const { duration, city, country, tourTitle, startDate, hotel, price } = tour;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.9;
  const allInclusiveOption = tour.hotel.foodOptions.find(
    option => option.description === "Все включено"
  );
  const extraPrice = allInclusiveOption?.extraPrice || 0;
  const quntityGuest = 2;
  const totalPrice = (price * duration + extraPrice) * quntityGuest;
  const date = startDate.slice(0, 9);
  
  return (
    <Pressable onPress={() => navigation.navigate("details", { id: tour._id })}>
      <View
        style={{ width: cardWidth }}
        className="rounded-[16px] overflow-hidden mb-3 self-center py-1 px-1 bg-white-200 border-[0.5px] border-gray-200">
        <ImageBackground
          source={{ uri: hotel.images[0] }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            position: "relative",
          }}
          imageStyle={{
            borderRadius: 16,
          }}>
          <View className="flex flex-row flex-wrap items-center gap-2 p-2">
            <View className="py-1 px-4 bg-blue-700 rounded-[16px] shadow-sm shadow-black-300">
              <Text className="text-white font-[400] text-[12px] leading-[1.5] text-center">
                {country}, {city}
              </Text>
            </View>
            <View className="py-1 px-4 bg-blue-700 rounded-[16px] shadow-sm shadow-black-300">
              <Text className="text-white font-[400] text-[12px] text-center">
                {date}
              </Text>
            </View>
          </View>

          <View className="w-full flex flex-row items-center justify-between gap-2 p-2 absolute bottom-0 right-0">
            <FavoritesAddButton tour={tour} /> tour
            <View className="flex flex-row items-center gap-2">
              <View className="flex flex-row items-center gap-2 py-1 px-4 bg-blue-700 rounded-[16px] shadow-sm shadow-black-300">
                <MaterialCommunityIcons
                  name="account"
                  size={20}
                  color="white"
                />
                <Text className="text-white font-[400] text-[12px] text-center">
                  {quntityGuest}
                </Text>
              </View>
              <View className="flex flex-row items-center gap-1 py-1 px-4 bg-blue-700 rounded-[16px] shadow-sm shadow-black-300">
                <MaterialCommunityIcons name="bed" size={20} color="white" />
                <Text className="text-white font-[400] text-[12px] text-center">
                  {duration}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View className="p-2">
          <View className="flex flex-row gap-2 items-center mb-1">
            <View className="flex flex-row gap-[2px] items-center">
              <MaterialCommunityIcons name="star" size={24} color="#588fe8" />
              <Text className="text-blue-700 font-[500] text-[14px]">
                {hotel.stars}
              </Text>
            </View>
            <Text className="text-blue-800 font-[600] text-[14px]">
              {tourTitle}
            </Text>
          </View>

          <Text className="text-blue-800 font-[600] text-[14px] text-right w-full">
            {totalPrice} грн
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
