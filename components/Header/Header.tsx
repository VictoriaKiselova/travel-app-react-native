import { Image, View, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  home: undefined;
};

export default function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="w-full px-2 pb-3 bg-blue-900">
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[124px] h-[38px]"
        />
      </TouchableOpacity>
    </View>
  );
}
