import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import HomeScreen from "../../app/screen/HomeScreen/HomeScreen";
import TourDetails from "../../app/screen/TourDetails/TourDetails";
import Favorites from "@/app/screen/Favorites/Favorites";
import NavMenu from "../NavMenu/NavMenu";
import Profile from "@/app/screen/Profile/Profile";
import Header from "../Header/Header";
import SignUp from "@/app/screen/SignUp/SignUp";
import SignIn from "@/app/screen/SignIn/SignIn";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import { RootStackParamList } from "../../types/roots";
import Booking from "@/app/screen/Booking/Booking";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const [currentRoute, setCurrentRoute] = useState<string>("home");

  return (
    <NavigationContainer
      onStateChange={state => {
        if (!state) return;
        const route = state.routes[state.index];
        setCurrentRoute(route.name);
      }}>
      <Header />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="details" component={TourDetails} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="favorites">
          {() => (
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="profile">
          {() => (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="booking">
          {() => (
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <NavMenu currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
    </NavigationContainer>
  );
}
