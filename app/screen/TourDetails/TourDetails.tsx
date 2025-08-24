import { useAuthContext } from "@/components/Context/AuthContext";
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
import { RootStackParamList } from "@/types/roots";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

export default function TourDetails() {
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { id } = route.params as { id: string };
  const { tourDetails, setTourDetails, isloading, setIsLoading } =
    useToursContext();
  const { isLoggedIn, setModalAuthVisible } = useAuthContext();

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
        <TouchableOpacity
          className="bg-blue-700 text-center rounded-3xl py-2 px-4 mb-5"
          onPress={() => {
            if (!isLoggedIn) {
              setModalAuthVisible(true);
              return;
            }
            navigation.navigate("booking");
          }}>
          <Text className="text-white text-center font-[400] shadow-sm text-[14px]">
            Забронювати
          </Text>
        </TouchableOpacity>
        <HotelReviews tourDetails={tourDetails} />
      </ScrollView>
    </GradientLayout>
  );
}
