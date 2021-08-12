import React from "react";
import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/Routes";
import { RecentGames } from "./src/screens/RecentGames";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}