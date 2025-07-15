import GradientLayout from "@/components/GradientLayout/GradientLayout";
import { Button, View, Text, TouchableOpacity } from "react-native";
import SignUp from "../SignUp/SignUp";

export default function Profile() {
  return (
    <GradientLayout>
      <SignUp />
    </GradientLayout>
  );
}
