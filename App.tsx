import "nativewind";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen/WelcomeScreen";
import Navigation from "./components/Navigation/Navigation";
import { Provider as PaperProvider } from "react-native-paper";
import ToursProvider from "@/components/Context/ToursContext";
import "./app/global.css";

export default function App() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4300);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <SafeAreaView className="flex-1 relative bg-blue-800">
      <ToursProvider>
        <PaperProvider>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </PaperProvider>
      </ToursProvider>
    </SafeAreaView>
  );
}
