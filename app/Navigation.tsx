import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import TourDetails from "./screen/TourDetails/TourDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="details" component={TourDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
