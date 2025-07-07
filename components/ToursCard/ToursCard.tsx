import { Dimensions, ImageBackground, View } from "react-native";
import { Tour } from "../../types/tours";
interface TourCardProps {
  tour: Tour;
}

export default function ToursCard({ tour }: TourCardProps) {
  const { hotel } = tour;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.9;

  return (
    <View
      style={{ width: cardWidth, borderRadius: 16, overflow: "hidden" }}
      className="mb-3 self-center rounded-xl">
      <ImageBackground
        source={{ uri: hotel.images[0] }}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 200,
          borderRadius: 16,
        }}></ImageBackground>
      {/* <Button
                  title="Перейти к деталям"
                  onPress={() => navigation.navigate("details")}
                /> */}
    </View>
  );
}
