import React from "react";
// Safearea
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// Components
import { Platform, StatusBar } from "react-native";
import MainContainer from "./navigation/MainContainer";
// Android Screens - VERY IMPORTANT
import { enableScreens } from "react-native-screens";
enableScreens();
// ----------------------------------------------------

// the start of the app
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
