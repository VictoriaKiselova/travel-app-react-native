import { Image, View, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useToursContext } from "../Context/ToursContext";

type RootStackParamList = {
  home: undefined;
};

export default function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { searchQuery, setSearchQuery } = useToursContext();

  const handleSetCategory = (e: string) => {
    setSearchQuery(e);
    navigation.navigate("home");
  };

  return (
    <View className="w-full px-1 pb-2 bg-blue-800 flex flex-row gap-1 justify-between">
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[124px] h-[38px]"
        />
      </TouchableOpacity>

      <Searchbar
        placeholder="Введіть країну"
        onChangeText={e => handleSetCategory(e)}
        value={searchQuery}
        style={{
          flex: 1,
          marginLeft: 10,
          marginRight: 6,
          backgroundColor: "#262655",
        }}
        inputStyle={{
          fontSize: 14,
          paddingVertical: 0,
          marginVertical: 0,
        }}
        icon={() => <MaterialIcons name="search" size={20} color="#E0E0E0" />}
        elevation={0}
      />
    </View>
  );
}
