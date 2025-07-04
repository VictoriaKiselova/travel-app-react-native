import { LinearGradient } from "expo-linear-gradient";
import "nativewind";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen/WelcomeScreen";
import Navigation from "./components/Navigation/Navigation";
import "./app/global.css";

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
      <View className="flex-1 relative">
        <SafeAreaView className="flex-1">
          {/* <StatusBar /> */}
          <Navigation />
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
}
