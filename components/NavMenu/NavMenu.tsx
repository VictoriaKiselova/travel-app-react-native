import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  profile: undefined;
};

export default function NavMenu() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="absolute bottom-0 left-0 flex flex-row bg-blue-900 w-full p-[1px]">
      <TouchableOpacity
        className="bg-blue-900 py-3 w-1/3 flex justify-center items-center gap-[8px]"
        onPress={() => navigation.navigate("home")}>
        <MaterialIcons name="home-filled" size={24} color="white" />
        <Text className="text-white text-center font-semibold">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-900 py-3 w-1/3 flex justify-center items-center gap-[8px]"
        onPress={() => navigation.navigate("favorites")}>
        <Fontisto name="favorite" size={24} color="white" />
        <Text className="text-white text-center font-semibold">Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-900 py-3 w-1/3 flex justify-center items-center gap-[8px]"
        onPress={() => navigation.navigate("profile")}>
        <FontAwesome name="user-circle-o" size={24} color="white" />
        <Text className="text-white text-center font-semibold">Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
