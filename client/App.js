import React from 'react';
// Safearea
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// Components
import { Platform, StatusBar } from "react-native";
import MainContainer from "./navigation/MainContainer";

// ----------------------------------------------------

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaProvider style={{ backgroundColor: "#F2F2F2" }}>
        <SafeAreaView
          edges={Platform.OS === "ios" ? ["top"] : []}
          style={{ flex: 1, marginHorizontal: "4%" }}
        >
          <MainContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
