import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuthContext } from "../Context/AuthContext";
import AuthRequiredModal from "../AuthRequiredModal/AuthRequiredModal";
import { RootStackParamList } from "../../types/roots";

type NavMenuProps = {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
};

export default function NavMenu({
  currentRoute,
  setCurrentRoute,
}: NavMenuProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isLoggedIn, modalAuthVisible, setModalAuthVisible } =
    useAuthContext();

  const handleProtectedRoute = (route: string) => {
    if (isLoggedIn) {
      navigation.navigate(route as never);
      setCurrentRoute(route);
    } else {
      setModalAuthVisible(true);
      setCurrentRoute(route);
      return;
    }
  };

  return (
    <View className="absolute bottom-0 left-0 flex flex-row bg-blue-800 w-full py-0 mb-0 ">
      <TouchableOpacity
        className={`py-3 w-1/3 flex justify-center items-center gap-[6px] ${
          currentRoute === "home" ? "bg-blue-200" : "bg-blue-800"
        }`}
        onPress={() => {
          if (currentRoute !== "home") navigation.navigate("home" as never);
          setCurrentRoute("home");
        }}>
        <MaterialIcons name="home-filled" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Головна
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`py-3 w-1/3 flex justify-center items-center gap-[6px] ${
          currentRoute === "favorites" ? "bg-blue-200" : "bg-blue-800"
        }`}
        onPress={() => handleProtectedRoute("favorites")}>
        <Fontisto name="favorite" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Улюблені
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`py-3 w-1/3 flex justify-center items-center gap-[6px] ${
          currentRoute === "profile" ? "bg-blue-200" : "bg-blue-800"
        }`}
        onPress={() => handleProtectedRoute("profile")}>
        <FontAwesome name="user-circle-o" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Профіль
        </Text>
      </TouchableOpacity>
      {modalAuthVisible && <AuthRequiredModal />}
    </View>
  );
}
