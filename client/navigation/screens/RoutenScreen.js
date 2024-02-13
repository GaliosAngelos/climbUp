import React from "react";
import { View, Text, Button } from "react-native";

export default function RoutenScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Login")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        RoutenScreen
      </Text>
      <Button
        title="Go to Kletterhalle/Zurück"
        onPress={() => navigation.navigate("Klettern")}
      />
    </View>
  );
}
