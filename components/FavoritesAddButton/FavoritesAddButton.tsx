import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tour } from "@/types/tours";

interface TourCardProps {
  tour: Tour;
}

export default function FavoritesAddButton({ tour }: TourCardProps) {
  const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => navigation.navigate("details", { id: tour._id })}>
      <MaterialIcons
        name="favorite"
        size={26}
        color="#588fe8"
        className="shadow-sm shadow-black-300"
      />
    </Pressable>
  );
}
