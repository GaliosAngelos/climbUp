import React from "react";
import { Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainContainer from "./navigation/MainContainer";

export default function App() {
  return (
    <SafeAreaProvider style={{background: "#fff"}}>
      <SafeAreaView edges={Platform.OS === 'ios'  ? ['top'] : [] } style={{background: "#000", flex: 1, marginHorizontal: "4%" }}>
        <MainContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
