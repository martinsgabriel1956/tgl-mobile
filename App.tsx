import React from "react";
import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/Routes";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}