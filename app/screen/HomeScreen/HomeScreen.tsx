import { View, FlatList } from "react-native";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import ToursCard from "@/components/ToursCard/ToursCard";
import { useToursContext } from "@/components/Context/ToursContext";
import { useEffect } from "react";
import ToursTabs from "@/components/ToursTabs/ToursTabs";

export default function HomeScreen() {
  const { category, tours, setTours } = useToursContext();

  useEffect(() => {
    const fetchTours = async () => {
      let url = "https://travel-app-api-service.onrender.com/tours/";
      if (category && category !== "all") {
        if (category === "popular") {
          url += `${category}`;
        } else if (category === "hot-tours") {
          url += `${category}`;
        }
      }

      try {
        const res = await fetch(url);
        const resData = await res.json();
        setTours(resData.data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, [category]);

  return (
    <GradientLayout>
      <View className="p-3 pb-0">
        <ToursTabs />
        <FlatList
          data={tours}
          renderItem={({ item }) => <ToursCard tour={item} />}
          keyExtractor={item => item._id}
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </GradientLayout>
  );
}
