import React from "react";
import { View, Text } from "react-native";

export default function KletternScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        KletternScreen
      </Text>
    </View>
  );
}
