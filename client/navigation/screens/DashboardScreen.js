import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

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
      <Button
        title="Go to Routenübersicht Page"
        onPress={() => navigation.navigate("RoutenView")}
      />
    </View>
  );
}
