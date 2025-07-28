import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { Pressable, Text, View } from "react-native";
import { logoutUser } from "../../api/authApi";
import { useAuthContext } from "@/components/Context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/roots";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import SupportContacModal from "@/components/SupportContact/SupportContact";
import { useState } from "react";

export default function Profile() {
  const { user, setUser, setIsLoggedIn } = useAuthContext();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isSupportModalVisible, setSupportModalVisible] =
    useState<boolean>(false);

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
      <View className="flex-1 justify-between p-3">
        <View>
          <View className="border-[2px] border-gray-200 p-2 rounded-full flex items-center justify-center w-[72px] h-[72px] mx-auto mt-[32px] mb-[16px]">
            <MaterialCommunityIcons name="account" size={50} color="gray" />
          </View>

          <Text className="text-black-500 font-[500] text-[16px] leading-[1.3] text-center mb-1">
            {user?.name} {user?.surname}
          </Text>
          <Text className="text-black-500 font-[400] text-[12px] leading-[1.3] text-center mb-1">
            {user?.email}
          </Text>
        </View>

        <View className="items-center">
          <Pressable
            onPress={() => {
              setSupportModalVisible(true);
            }}
            className="mx-auto">
            <Text className="text-black-300 font-[400] text-[12px] leading-[1.3] text-center mb-2 underline">
              Зв&apos;язок зі службою підтримки
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              handleLogout();
            }}
            className="mx-auto">
            <Text className="font-[400] text-[14px] text-center flex-shrink tracking-wide leading-tight text-text-black-500 active:text-blue-300">
              Вийти
            </Text>
          </Pressable>
        </View>
      </View>
      <SupportContacModal
        isSupportModalVisible={isSupportModalVisible}
        setSupportModalVisible={setSupportModalVisible}
      />
    </GradientLayout>
  );
}
