import { View, FlatList, Text } from "react-native";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import ToursCard from "@/components/ToursCard/ToursCard";
import { useToursContext } from "@/components/Context/ToursContext";
import { useEffect } from "react";
import ToursTabs from "@/components/ToursTabs/ToursTabs";
import SearchByFilters from "@/components/SearchByFilters/SearchByFilters";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function HomeScreen() {
  const {
    category,
    tours,
    setTours,
    searchQuery,
    setCategory,
    setAllTours,
    isloading,
    setIsLoading,
  } = useToursContext();

  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true);
      let url = "https://travel-app-api-service.onrender.com/tours/";
      if (category && category !== "all") {
        if (category === "popular") {
          url += `${category}`;
        } else if (category === "hot-tours") {
          url += `${category}`;
        }
      }
      if (searchQuery) {
        url += `country/${searchQuery}`;
        setCategory("");
      }
      try {
        const res = await fetch(url);
        const resData = await res.json();
        setTours(resData.data);
        setAllTours(resData.data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, [category, searchQuery]);

  return (
    <GradientLayout>
      <View className="p-3 pb-0">
        <ToursTabs />
        <SearchByFilters tours={tours} />

        {isloading ? (
          <ActivityIndicator
            animating={true}
            color={MD2Colors.blue800}
            className="p-3"
          />
        ) : tours.length > 0 ? (
          <FlatList
            data={tours}
            renderItem={({ item }) => <ToursCard tour={item} />}
            keyExtractor={item => item._id}
            contentContainerStyle={{ alignItems: "center" }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <Text className="text-center text-gray-500 text-[16px]">
            Нічого не знайдено
          </Text>
        )}
      </View>
    </GradientLayout>
  );
}
