import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { Pressable, Text, View } from "react-native";
import { logoutUser } from "../../api/authApi";
import { useAuthContext } from "@/components/Context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/roots";

export default function Profile() {
  const { setUser, setIsLoggedIn } = useAuthContext();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    const responseExit = await logoutUser();

    if (responseExit.status === 200) {
      setUser(null);
      setIsLoggedIn(false);
      navigation.navigate("home");
    }
  };

  return (
    <GradientLayout>
      <View className="p-3">
        <Text>Profile</Text>
        <Pressable
          onPress={() => {
            handleLogout();
          }}
          className="w-full py-3 px-4 bg-blue-400 rounded-xl active:bg-blue-300 mt-[16px] mb-[24px]">
          <Text className="font-[400] text-[14px] text-center flex-shrink tracking-wide leading-tight text-white-100">
            Вийти
          </Text>
        </Pressable>
      </View>
    </GradientLayout>
  );
}
