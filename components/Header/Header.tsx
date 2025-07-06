import { Image, View, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type RootStackParamList = {
  home: undefined;
};

export default function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <View className="w-full px-2 pb-3 bg-blue-900 flex flex-row gap-1 justify-between items-center">
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[124px] h-[38px]"
        />
      </TouchableOpacity>
      <Searchbar
        placeholder="Введіть країну"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          flex: 1,
          marginLeft: 10,
          backgroundColor: "#262655",
        }}
        inputStyle={{
          fontSize: 14,
          paddingVertical: 0,
          marginVertical: 0,
        }}
        icon={() => <MaterialIcons name="search" size={20} color="#E0E0E0" />}
        elevation={0}
        theme={{
          colors: { onSurfaceVariant: "#E0E0E0" },
        }}
      />
    </View>
  );
}
