import React from "react";
import { View, Text, Button } from "react-native";

export default function RoutenViewScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        RoutenViewScreen
      </Text>
      <Button
        title="Go to Dashboard / zurück"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
}
