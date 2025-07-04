import { LinearGradient } from "expo-linear-gradient";
import "nativewind";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen/WelcomeScreen";
import Navigation from "./components/Navigation/Navigation";
import "./app/global.css";

export default function App() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <SafeAreaView className="flex-1 relative bg-blue-900">
      <StatusBar barStyle="light-content" />
      <Navigation />
    </SafeAreaView>
  );
}
