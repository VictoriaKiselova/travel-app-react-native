import { SafeAreaView, StatusBar, Text } from "react-native";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import "react-native-reanimated";
import NavMenu from "@/components/NavMenu/NavMenu";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <HomeScreen />
      <NavMenu />
    </SafeAreaView>
  );
}
