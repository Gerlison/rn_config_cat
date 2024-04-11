import React from "react";
import AppProvider from "./src/AppProvider";

import HomeScreen from "./src/HomeScreen";

export default function App() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}
