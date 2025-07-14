import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function GoBack() {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => navigation.goBack()}
      className="flex flex-row items-center gap-1 p-1 mb-1 group">
      <MaterialCommunityIcons name="arrow-left" size={18} color="#636569" />
      <Text
        className={`font-[400] text-[12px] ${
          pressed ? "text-blue-900" : "text-black-400"
        }`}>
        Назад
      </Text>
    </Pressable>
  );
}
