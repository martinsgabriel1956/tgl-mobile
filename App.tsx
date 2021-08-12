import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Authentication } from "./src/screens/Authentication";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Authentication />
    </View>
  );
}