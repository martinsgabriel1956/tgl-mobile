import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Authentication } from "./src/screens/Authentication";
import { Registration } from "./src/screens/Registration";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Registration />
    </View>
  );
}