import { LinearGradient } from "expo-linear-gradient";
import { Button, View, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import GradientLayout from "@/components/GradientLayout/GradientLayout";

type RootStackParamList = {
  Home: undefined;
  details: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <GradientLayout>
      <View className="p-3 bg-gradient-to-br from-gradient-100 via-gradient-200 to-gradient-300">
        {/* <Button
        title="Перейти к деталям"
        onPress={() => navigation.navigate("details")}
      /> */}
      </View>
    </GradientLayout>
  );
}
