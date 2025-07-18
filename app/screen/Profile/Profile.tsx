import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { Button, View, Text, TouchableOpacity } from "react-native";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

export default function Profile() {
  return (
    <GradientLayout>
      {/* <SignUp /> */}
      <SignIn />
    </GradientLayout>
  );
}
