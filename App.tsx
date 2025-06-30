import NavMenu from "@/components/NavMenu/NavMenu";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Navigation from "./app/Navigation";
import WelcomeScreen from "./app/screen/WelcomeScreen/WelcomeScreen";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <LinearGradient
      colors={["#fddde6", "#d9a2f0", "#a3c6f1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}>
      <View style={{ flex: 1, position: "relative" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <Navigation />
        </SafeAreaView>
        <NavMenu />
      </View>
    </LinearGradient>
  );
}
