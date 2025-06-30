import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NavMenu() {
  return (
    <View style={styles.navMenu}>
      <Text>NavMenu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navMenu: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 48,
    backgroundColor: "#005460",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#d1d5db",
    zIndex: 100,
  },
});
