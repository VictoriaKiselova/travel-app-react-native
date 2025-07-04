import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../app/screen/HomeScreen/HomeScreen";
import TourDetails from "../../app/screen/TourDetails/TourDetails";
import Favorites from "@/app/screen/Favorites/Favorites";
import NavMenu from "../NavMenu/NavMenu";
import Profile from "@/app/screen/Profile/Profile";
import Header from "../Header/Header";

type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  details: undefined;
  profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="favorites" component={Favorites} />
        {/* <Stack.Screen name="details" component={TourDetails} /> */}
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
      <NavMenu />
    </NavigationContainer>
  );
}
