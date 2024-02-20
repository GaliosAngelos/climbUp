import React from "react";
// Components
import { View, Text, Button } from "react-native";

// --------------------------------------------------------------

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        Dashboard
      </Text>
    </View>
  );
}
