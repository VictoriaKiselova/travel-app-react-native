import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  profile: undefined;
};

export default function NavMenu() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="absolute bottom-0 left-0 flex flex-row bg-blue-800 w-full pt-5 pb-0 h-[50px]">
      <TouchableOpacity
        className="bg-blue-800 py-0 w-1/3 flex justify-center items-center gap-[6px]"
        onPress={() => navigation.navigate("home")}>
        <MaterialIcons name="home-filled" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Головна
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-800 py-0 w-1/3 flex justify-center items-center gap-[6px]"
        onPress={() => navigation.navigate("favorites")}>
        <Fontisto name="favorite" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Улюблені
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-800 py-0 w-1/3 flex justify-center items-center gap-[6px]"
        onPress={() => navigation.navigate("profile")}>
        <FontAwesome name="user-circle-o" size={24} color="white" />
        <Text className="text-white text-center font-semibold text-[12px]">
          Профіль
        </Text>
      </TouchableOpacity>
    </View>
  );
}
