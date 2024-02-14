import React from "react";
import { View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        ProfileScreen
      </Text>
    </View>
  );
}
