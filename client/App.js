import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainContainer from "./navigation/MainContainer";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, marginHorizontal: "4%" }}>
        <MainContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
