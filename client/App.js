import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainContainer from "./navigation/MainContainer";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaProvider style={{ backgroundColor: "#F2F2F2" }}>
        <SafeAreaView
          style={{
            flex: 1,
            marginHorizontal: "4%",
            backgroundColor: "#F2F2F2",
          }}
        >
          <MainContainer />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
