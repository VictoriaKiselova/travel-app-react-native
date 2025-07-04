import { Button, View, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  details: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>HomeScreen</Text>
      {/* <Button
        title="Перейти к деталям"
        onPress={() => navigation.navigate("details")}
      /> */}
    </View>
  );
}
