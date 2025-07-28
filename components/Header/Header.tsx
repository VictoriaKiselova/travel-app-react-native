import { Image, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useToursContext } from "../Context/ToursContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../../types/roots";

export default function Header() {
  const insets = useSafeAreaInsets();
  const headerPaddingTop = insets.top > 16 ? 16 : insets.top;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { searchQuery, setSearchQuery } = useToursContext();

  const handleSetCategory = (e: string) => {
    setSearchQuery(e);
    navigation.navigate("home");
  };

  return (
    <View
      style={{ paddingTop: headerPaddingTop }}
      className="w-full px-[10px] pb-[10px] bg-blue-800 flex flex-row gap-1 items-center justify-between">
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        className="items-center">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[132px] h-[40px]"
        />
      </TouchableOpacity>

      <View className="flex-row items-center w-[200px] bg-[#262655] rounded-2xl px-2">
        <MaterialIcons name="search" size={20} color="#E0E0E0" />
        <TextInput
          className="flex-1 text-white text-[14px] px-2 py-0"
          placeholder="Введіть країну"
          placeholderTextColor="#A0A0A0"
          value={searchQuery}
          onChangeText={handleSetCategory}
          cursorColor="#E0E0E0"
          style={{ height: 40 }}
        />
      </View>
    </View>
  );
}
