import React from "react";
import { Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainContainer from "./navigation/MainContainer";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaProvider style={{backgroundColor: "#F2F2F2"}}>
      <SafeAreaView edges={Platform.OS === 'ios'  ? ['top'] : [] } style={{flex: 1, marginHorizontal: "4%" }}>
        <MainContainer />
      </SafeAreaView>
    </SafeAreaProvider>
    </>
  );
}
