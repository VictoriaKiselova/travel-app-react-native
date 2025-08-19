import { useToursContext } from "@/components/Context/ToursContext";
import DetailsImages from "@/components/DetailsImages/DetailsImages";
import FeaturesList from "@/components/FeaturesList/FeaturesList";
import GoBack from "@/components/GoBack/GoBack";
import GradientLayout from "@/components/GradientLayout/GradientLayout";
import HotelDescription from "@/components/HotelDescription/HotelDescription";
import HotelReviews from "@/components/HotelReviews/HotelReviews";
import Loader from "@/components/Loader/Loader";
import TourBasicInfo from "@/components/TourBasicInfo/TourBasicInfo";
import TourHeader from "@/components/TourHeader/TourHeader";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { ScrollView } from "react-native";

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
      <ScrollView className="px-3 pt-2" style={{ marginBottom: -90 }}>
        <GoBack />
        <TourHeader tourDetails={tourDetails} />
        <DetailsImages listImagesHotel={listImagesHotel} />
        <TourBasicInfo tourDetails={tourDetails} />
        <FeaturesList tourDetails={tourDetails} />
        <HotelDescription tourDetails={tourDetails} />
        <HotelReviews tourDetails={tourDetails} />
      </ScrollView>
    </GradientLayout>
  );
}
