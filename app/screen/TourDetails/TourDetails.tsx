import { View, Text} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import GoBack from "@/components/GoBack/GoBack";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { useToursContext } from "@/components/Context/ToursContext";
import Loader from "@/components/Loader/Loader";
import DetailsImages from "@/components/DetailsImages/DetailsImages";

export default function TourDetails() {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const { tourDetails, setTourDetails, isloading, setIsLoading } =
    useToursContext();
  const listImagesHotel = tourDetails?.hotel.images;

  useEffect(() => {
    const fetchTourById = async (id: string) => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://travel-app-api-service.onrender.com/tours/details/${id}`
        );
        const dataTour = await res.json();
        setTourDetails(dataTour.data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          throw e.message;
        } else {
          throw String(e);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchTourById(id);
  }, [id]);

  return isloading ? (
    <Loader />
  ) : (
    <GradientLayout>
      <View className="px-3 pt-2 pb-0">
        <GoBack />
        {tourDetails && (
          <Text className="text-blue-900 font-[500] text-[16px] leading-[1.4] text-center mb-3">
            {tourDetails?.tourTitle ?? "Не зазначено"}
          </Text>
        )}
        <DetailsImages listImagesHotel={listImagesHotel} />
      </View>
    </GradientLayout>
  );
}
