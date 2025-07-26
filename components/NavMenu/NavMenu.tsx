import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuthContext } from "../Context/AuthContext";
import AuthRequiredModal from "../AuthRequiredModal/AuthRequiredModal";
import { RootStackParamList } from "../../types/roots";

type AuthRequiredModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export default function NavMenu({
  modalVisible,
  setModalVisible,
}: AuthRequiredModalProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isLoggedIn } = useAuthContext();

  const handleProtectedRoute = (route: string) => {
    if (isLoggedIn) {
      navigation.navigate(route as never);
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View className="absolute bottom-0 left-0 flex flex-row bg-blue-800 w-full pt-5 pb-0 h-[50px]">
      <TouchableOpacity
        className="bg-blue-800 py-0 w-1/3 flex justify-center items-center gap-[6px]"
        onPress={() => navigation.navigate("home" as never)}>
        <MaterialIcons name="home-filled" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Головна
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-800 py-0 w-1/3 flex justify-center items-center gap-[6px]"
        onPress={() => handleProtectedRoute("favorites")}>
        <Fontisto name="favorite" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Улюблені
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-800 py-0 w-1/3 flex justify-center items-center gap-[6px]"
        onPress={() => handleProtectedRoute("profile")}>
        <FontAwesome name="user-circle-o" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Профіль
        </Text>
      </TouchableOpacity>
      {modalVisible && (
        <AuthRequiredModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </View>
  );
}
