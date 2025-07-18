import { Image, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useToursContext } from "../Context/ToursContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RootStackParamList = {
  home: undefined;
};

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
      className="w-full px-1 pb-2 bg-blue-800 flex flex-row gap-1 items-center justify-between">
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[124px] h-[38px]"
        />
      </TouchableOpacity>

      <View
        className="flex-row items-center flex-1 mx-2 bg-[#262655] rounded-2xl"
        style={{ height: 40 }}>
        <MaterialIcons
          name="search"
          size={20}
          color="#E0E0E0"
          className="ml-2"
        />
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
