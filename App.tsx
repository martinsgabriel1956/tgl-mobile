import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/Routes";
import { store } from "./src/store";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
