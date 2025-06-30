import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Перейти к деталям"
        onPress={() => navigation.navigate("details")}
      />
    </View>
  );
}
