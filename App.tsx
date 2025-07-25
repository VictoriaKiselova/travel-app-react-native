import "nativewind";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen/WelcomeScreen";
import Navigation from "./components/Navigation/Navigation";
import { Provider as PaperProvider } from "react-native-paper";
import ToursProvider from "@/components/Context/ToursContext";
import "./app/global.css";
import AuthProvider from "./components/Context/AuthContext";

export default function App() {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4300);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 relative bg-blue-800">
        <AuthProvider>
          <ToursProvider>
            <PaperProvider>
              <StatusBar barStyle="light-content" />
              <Navigation
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            </PaperProvider>
          </ToursProvider>
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
