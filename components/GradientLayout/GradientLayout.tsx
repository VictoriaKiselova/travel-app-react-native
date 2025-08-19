import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";

type GradientBackgroundProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function GradientLayout({
  children,
  style,
}: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={["#fee6ed", "#ebc7f9", "#a3c6f1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ flex: 1, paddingBottom: 140 }, style]}>
      {children}
    </LinearGradient>
  );
}
